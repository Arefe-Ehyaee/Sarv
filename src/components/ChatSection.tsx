import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import tree from "../assets/icons/tree.svg";
import { ReactComponent as User } from "../assets/icons/user.svg";

type Message = {
    sender: 'user' | 'ai';
    text: string;
};

const ChatSection = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const userId = '1234';

    const suggestedQuestions = [
        { id: 1, text: 'کدوم تراپیست برام مناسبه' },
        { id: 2, text: 'دچار بی انگیزگی شدم' },
        { id: 3, text: 'چرا احساس ناامیدی دارم' },
        { id: 4, text: 'در شرکت استرس و اضطراب دارم' },
        { id: 5, text: 'رابطه عاطفی پر از مشکله' },
        { id: 6, text: 'افسردگی اجازه نمیده زندگی کنم' },
    ];

const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const newUserMessage: Message = { sender: 'user', text };
    setMessages(prev => [...prev, newUserMessage]);
    setMessage('');

    try {
        const response = await fetch('http://89.251.9.19:3000/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: userId,
                text: text,
            }),
        });

        if (!response.ok) throw new Error('Server error');

        const data = await response.json();
        let aiReply = data.response || 'پاسخی دریافت نشد';

        // حذف "پاسخ:" اگر در ابتدای متن بود
        if (aiReply.trim().startsWith("پاسخ:")) {
            aiReply = aiReply.trim().substring(6).trim(); // حذف "پاسخ:" و فاصله‌ها
        }

        setMessages(prev => [...prev, { sender: 'ai', text: aiReply }]);
    } catch (error) {
        console.error('Error sending message:', error);
        setMessages(prev => [
            ...prev,
            { sender: 'ai', text: 'خطا در ارتباط با سرور. لطفاً دوباره تلاش کنید.' },
        ]);
    }
};


    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const userHasSentMessage = messages.some(msg => msg.sender === 'user');

    return (
        <div className="flex flex-col h-screen max-w-4xl w-full mx-auto px-4">
            <div className="overflow-y-auto pt-[150px] hide-scrollbar">
                <div className="flex flex-col items-center justify-center mb-[20px]">
                    <img src={tree} alt="sarv" className="w-[160px] h-[206px] mb-4" />
                    <div className="text-center px-4">
                        <h2 className="desktop:text-2xl tablet:text-[22px] text-lg font-myVazirMedium text-primary-600 leading-6">
                            من سروبات هستم، دستیار تو در سلامت روان
                        </h2>
                        <p className="font-myVazirRegular desktop:text-lg tablet:text-lg text-base text-primary-600 leading-6 mt-3">
                            برای پشتیبانی و همراهی در سلامت روان تو شبانه روز اینجا هستم .
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-4 px-2">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex items-start ${msg.sender === 'user' ? 'justify-start' : 'justify-end'}`}
                        >
                            {msg.sender === 'user' && (
                                <User className="w-6 h-6 rounded-full ml-2 text-primary-400" />
                            )}
                            <div
                                className={`max-w-[80%] px-4 py-2 whitespace-pre-line rounded-b-xl ${msg.sender === 'user' ? 'rounded-tl-xl' : 'rounded-tr-xl'
                                    } text-Gray-950 ${msg.sender === 'user'
                                        ? 'bg-primary-50 border border-primary-200'
                                        : 'bg-secondary-100 border border-secondary-200'
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

            <div className="sticky bottom-0 pt-2 pb-4 bg-secondary-50">
                <div className="relative mb-5">
                    <div className="flex items-center rounded-full border bg-white h-[47px] border-primary-400 pl-4 pr-1">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="خب شروع کن..."
                            className="flex-1 text-right px-3 py-2 rounded-full outline-none"
                            dir="rtl"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') handleSend(message);
                            }}
                        />
                        <button
                            className="ml-1 text-slate-400 hover:text-slate-600 p-2 rounded-full"
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
                                    className="py-2 h-10 px-[14px] font-myVazirRegular text-base text-Gray-600 bg-white rounded-full border border-Gray-400 hover:bg-slate-50 transition-colors"
                                >
                                    {question.text}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <div className="text-center text-sm text-Gray-600 mb-4">
                    سروبات جایگزین تراپیست نیست. در شرایط حاد با تراپیست صحبت کنید.
                </div>
            </div>
        </div>
    );
};

export default ChatSection;
