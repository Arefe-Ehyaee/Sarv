import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import tree from "../assets/icons/tree.svg";
import { ReactComponent as User } from "../assets/icons/user.svg";
import useUserStore from "../store/UserStore";

const Ai_api = "http://193.36.84.51:80";

type Message = {
    sender: 'user' | 'ai';
    text: string;
    color?: string;
};

type ChatChatSectionProps = {
    setBgColor?: (color: string) => void;
    collapsed?: boolean;
};

const ChatChatSection: React.FC<ChatChatSectionProps> = ({
    setBgColor = () => { },
    collapsed = true
}) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const user = useUserStore((state) => state.user);
    const userId = user?.username || 'guest';

    const suggestedQuestions = [
        { id: 2, text: 'دچار بی انگیزگی شدم' },
        { id: 3, text: 'چرا احساس ناامیدی دارم' },
        { id: 4, text: 'در شرکت استرس و اضطراب دارم' },
        { id: 5, text: 'رابطه عاطفی پر از مشکله' },
        { id: 6, text: 'افسردگی اجازه نمیده زندگی کنم' },
    ];

    const colorMap: Record<string, string> = {
        blue: 'bg-blue-100 border-blue-200',
        brown: 'bg-amber-100 border-amber-200',
        red: 'bg-red-100 border-red-200',
        yellow: 'bg-yellow-100 border-yellow-200',
        purple: 'bg-purple-100 border-purple-200',
        green: 'bg-green-100 border-green-200',
    };

    // Send message to new Chat API
    const handleSend = async (text: string) => {
        if (!text.trim()) return;

        // Add user's message
        const newUserMessage: Message = { sender: 'user', text };
        setMessages(prev => [...prev, newUserMessage]);
        setMessage('');

        try {
            const response = await fetch(`${Ai_api}/api/session/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user_id: userId, message: text }),
            });

            if (!response.ok) {
                console.warn('Chat API response not OK');
                return; // Don't show AI message
            }

            const data = await response.json();
            const aiReply = data.response || 'پاسخی دریافت نشد';
            const aiColor = 'green'; // Default color for AI messages

            setBgColor(aiColor);
            setMessages(prev => [...prev, { sender: 'ai', text: aiReply, color: aiColor }]);
        } catch (error) {
            console.error('Error sending message:', error);
            setMessages(prev => [
                ...prev,
                { sender: 'ai', text: 'خطا در ارتباط با سرور. لطفاً دوباره تلاش کنید.', color: 'red' },
            ]);
        }
    };

    // Start session when component mounts
    useEffect(() => {
        const startSession = async () => {
            if (!userId) return;
            try {
                const res = await fetch(`${Ai_api}/api/session/start`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ user_id: userId }),
                });
                if (!res.ok) throw new Error('Failed to start session');
                const data = await res.json();

                // Add initial AI message
                if (data?.initial_message) {
                    setMessages([{ sender: 'ai', text: data.initial_message, color: 'green' }]);
                }
            } catch (error) {
                console.error('Error starting session:', error);
                setMessages([{ sender: 'ai', text: 'خطا در اتصال به سرور، لطفا دوباره تلاش کنید.', color: 'red' }]);
            }
        };

        startSession();
    }, [userId]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const userHasSentMessage = messages.some(msg => msg.sender === 'user');

    return (
        <div className="flex flex-col h-screen w-full px-4 bg-white">
            <div className="overflow-y-auto pt-[150px] hide-scrollbar">
                <div className="flex flex-col items-center justify-center mb-[20px]">
                    <img src={tree} alt="sarv" className="w-[160px] h-[206px] mb-4" />
                    <div className="text-center px-4">
                        <h2 className="desktop:text-2xl tablet:text-[22px] text-lg font-myVazirMedium text-primary-600 leading-6">
                            سروبات، دستیار تو در سلامت روان
                        </h2>
                        <p className="font-myVazirRegular desktop:text-lg tablet:text-lg text-base text-primary-600 leading-6 mt-3">
                            برای پشتیبانی و همراهی تو در شبانه روز
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-4 px-2 font-myYekanFaNumRegular">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex items-start text-justify ${msg.sender === 'user' ? 'justify-start' : 'justify-end'}`}
                        >
                            {msg.sender === 'user' && (
                                <User className="w-6 h-6 rounded-full ml-2 text-primary-400" />
                            )}
                            <div
                                className={`max-w-[80%] px-4 py-2 whitespace-pre-line rounded-b-xl ${msg.sender === 'user' ? 'rounded-tl-xl' : 'rounded-tr-xl'
                                    } text-Gray-950 ${msg.sender === 'user'
                                        ? 'bg-primary-50 border border-primary-200'
                                        : colorMap[msg.color || 'blue']
                                    }`}
                                dir="rtl"
                            >
                                {msg.text}
                            </div>
                            {msg.sender === 'ai' && (
                                <img src={tree} alt="ai-avatar" className="w-8 h-8 rounded-full mr-2" />
                            )}
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
            </div>

            <div className="bottom-0 pt-2 pb-4">
                <div className="relative mb-5">
                    <div
                        className={`flex items-center border border-primary-400 bg-white px-4 py-2 ${message.split('\n').length > 1 || message.length > 50
                                ? 'rounded-2xl'
                                : 'rounded-full'
                            }`}
                    >
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="خب شروع کن..."
                            className="flex-1 text-right font-myYekanFaNumRegular text-Gray-950 bg-white outline-none resize-none placeholder-gray-400 overflow-hidden"
                            dir="rtl"
                            rows={1}
                            style={{ maxHeight: '150px' }}
                            onInput={(e) => {
                                const target = e.target as HTMLTextAreaElement;
                                target.style.height = 'auto';
                                target.style.height = target.scrollHeight + 'px';
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    handleSend(message);
                                }
                            }}
                        />
                        <button
                            className="ml-2 text-slate-400 hover:text-slate-600 p-2 rounded-full flex-shrink-0"
                            onClick={() => handleSend(message)}
                        >
                            <Send size={20} />
                        </button>
                    </div>
                </div>

                {!userHasSentMessage && (
                    <div className="mb-6">
                        <p className="text-center font-myVazirRegular text-base text-Gray-600 mb-[6px]" dir="ltr">
                            :افراد معمولا در این باره میپرسند
                        </p>
                        <div className="flex flex-wrap justify-center gap-2">
                            {suggestedQuestions.map((question) => (
                                <button
                                    key={question.id}
                                    onClick={() => handleSend(question.text)}
                                    className="py-2 h-[30px] flex items-center px-[14px] font-myVazirRegular text-base text-Gray-600 bg-white rounded-full border border-Gray-400 hover:bg-slate-50 transition-colors"
                                >
                                    {question.text}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <div className="text-center desktop:text-sm tablet:text-sm text-xs font-myVazirRegular text-Gray-600 mb-4">
                    سروبات جایگزین تراپیست نیست. در شرایط حاد با تراپیست صحبت کنید.
                </div>
            </div>


        </div>
    );
};

export default ChatChatSection;
