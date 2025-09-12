import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import tree from "../assets/icons/tree.svg";
import { ReactComponent as User } from "../assets/icons/user.svg";
import useUserStore from "../store/UserStore";

// const Ai_api = "http://193.36.84.51:8080";
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

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
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const token = useUserStore((state) => state.token);
    const user = useUserStore((state) => state.user);
    const userId = user?.username || 'guest';

    const colorMap: Record<string, string> = {
        blue: 'bg-blue-100 border-blue-200',
        brown: 'bg-amber-100 border-amber-200',
        red: 'bg-red-100 border-red-200',
        yellow: 'bg-yellow-100 border-yellow-200',
        purple: 'bg-purple-100 border-purple-200',
        green: 'bg-green-100 border-green-200',
        gray: 'bg-[#CAE8BD]'
    };

    // Auto-resize textarea
    const adjustTextareaHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            const scrollHeight = textareaRef.current.scrollHeight;
            const maxHeight = 200;
            textareaRef.current.style.height = Math.min(scrollHeight, maxHeight) + 'px';
        }
    };

    const handleSend = async (text: string) => {
        if (!text.trim()) return;

        const newUserMessage: Message = { sender: 'user', text };
        setMessages(prev => [...prev, newUserMessage]);
        setMessage('');

        if (textareaRef.current) textareaRef.current.style.height = 'auto';

        try {
            const response = await fetch(`${BASE_URL}/api/v1/chat/messages`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ message: text }),
            });

            const data = await response.json();

            if (!response.ok) {

                let errorMsg = 'پاسخی از هوش مصنوعی دریافت نشد. لطفاً دوباره تلاش کنید.';

                if (data.statusCode === 400) {
                    errorMsg = 'پاسخی از هوش مصنوعی دریافت نشد. لطفاً دوباره تلاش کنید.';
                } else if (data.statusCode === 500) {
                    errorMsg = 'مشکلی در سرور پیش آمد. لطفاً کمی بعد دوباره امتحان کن.';
                }

                setMessages(prev => [
                    ...prev,
                    { sender: 'ai', text: errorMsg, color: 'red' },
                ]);
                return;
            }


            const aiReply = data.response || 'پاسخی دریافت نشد';
            const aiColor = 'gray';

            setBgColor(aiColor);
            setMessages(prev => [...prev, { sender: 'ai', text: aiReply, color: aiColor }]);
        } catch (error) {
            setMessages(prev => [
                ...prev,
                { sender: 'ai', text: 'خطا در ارتباط با سرور. لطفاً دوباره تلاش کنید.', color: 'red' },
            ]);
        }

    };

    useEffect(() => {
        const startSession = async () => {
            if (!userId) return;
            try {
                const res = await fetch(`${BASE_URL}/api/v1/chat`, {
                    method: 'POST',
                    headers: { Authorization: `Bearer ${token}` },
                    body: JSON.stringify({ user_id: userId }),
                });
                if (!res.ok) throw new Error('Failed to start session');
                const data = await res.json();
                if (data?.initial_message) {
                    setMessages([{ sender: 'ai', text: data.initial_message, color: 'gray' }]);
                }
            } catch (error) {
                setMessages([{ sender: 'ai', text: 'خطا در اتصال به سرور، لطفا دوباره تلاش کنید.', color: 'red' }]);
            }
        };
        startSession();
    }, [userId]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, [messages]);

    useEffect(() => {
        adjustTextareaHeight();
    }, [message]);

    return (
        <div className="flex flex-col h-screen w-full bg-[#F8F8F8]">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto pt-[100px] sm:pt-[150px] pb-2 hide-scrollbar">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="flex flex-col items-center justify-center mb-[20px]">
                        <img src={tree} alt="sarv" className="w-[100px] h-[146px] mb-4" />
                        <div className="text-center px-4">
                            <h2 className="desktop:text-2xl tablet:text-[22px] text-lg font-myVazirMedium text-primary-600 leading-6">
                                سروبات، همراه تو در سلامت روان
                            </h2>
                            <p className="font-myVazirRegular desktop:text-lg tablet:text-lg text-base text-primary-600 leading-6 mt-3">
                                برای پشتیبانی و همراهی تو در شبانه روز
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 px-2 font-myYekanFaNumRegular text-sm sm:text-base">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex items-start text-justify ${msg.sender === 'user' ? 'justify-start' : 'justify-end'}`}
                            >
                                {msg.sender === 'user' && (
                                    <User className="w-6 h-6 rounded-full ml-2 text-primary-400" />
                                )}
                                <div
                                    className={`max-w-[80%] px-4 py-2 whitespace-pre-line rounded-xl
                                        text-Gray-950 ${msg.sender === 'user'
                                            ? 'bg-white'
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
            </div>

            {/* Input Area */}
            <div className="sticky bottom-0 bg-[#F8F8F8] pt-2 pb-4 sm:pb-6 px-1">
                <div className="max-w-4xl mx-auto">
                    <div className="relative max-w-3xl mx-auto">
                        <div className="relative bg-white border border-gray-300 rounded-2xl flex items-center pr-4 pl-2 py-2">
                            <textarea
                                ref={textareaRef}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="خب شروع کن..."
                                className="flex-1 text-right font-myYekanFaNumRegular text-Gray-950 bg-white outline-none resize-none placeholder-gray-400 overflow-hidden"
                                dir="rtl"
                                rows={1}
                                onInput={adjustTextareaHeight}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        e.preventDefault();
                                        handleSend(message);
                                    }
                                }}
                                style={{ maxHeight: '200px' }}
                            />
                            <button
                                className="ml-1 text-slate-400 hover:text-slate-600 p-2 rounded-full flex-shrink-0"
                                onClick={() => handleSend(message)}
                            >
                                <Send size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatChatSection;
