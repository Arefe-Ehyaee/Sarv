import React, { useState } from 'react';
import { Send, Mic } from 'lucide-react';
import tree from "../assets/icons/tree.svg";

const ChatSection = () => {
    const [message, setMessage] = useState('');

    const suggestedQuestions = [
        { id: 1, text: 'کدوم تراپیست برام مناسبه' },
        { id: 2, text: 'دچار بی انگیزگی شدم' },
        { id: 3, text: 'چرا احساس ناامیدی دارم' },
        { id: 4, text: 'در شرکت استرس و اضطراب دارم' },
        { id: 5, text: 'رابطه عاطفی پر از مشکله' },
        { id: 6, text: 'افسردگی اجازه نمیده زندگی کنم' },
    ];

    return (
        <div className="flex flex-col max-w-3xl w-full mx-auto px-4">
            {/* Chat content area */}
            <div className="flex flex-col items-center justify-center rounded-lg desktop:mt-[100px] tablet:mt-[160px] mt-[80px]">
                {/* Tree logo */}
                <div className="mb-4">
                    <img src={tree} alt='sarv' className='w-[160px] h-[206px]'></img>
                </div>

                <div className="text-center mb-5 px-4">
                    <h2 className="desktop:text-2xl tablet:text-[22px] text-lg font-myVazirMedium text-primary-600 leading-6 desktop:h-9 tablet:h-[33px]">من سروبات هستم، دستیار تو در سلامت روان</h2>
                    <p className="font-myVazirRegular desktop:text-lg tablet:text-lg text-base text-primary-600 leading-6">برای پشتیبانی و همراهی در سلامت روان تو شبانه روز اینجا هستم .</p>
                </div>
            </div>

            {/* Chat input */}
            <div className="relative mb-5">
                <div className="flex items-center rounded-full border bg-white h-[47px]  border-primary-400 pl-4 pr-2">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="خب شروع کن..."
                        className="flex-1 text-right px-3 pb-1"
                        dir="rtl"
                    />
                    <button className="ml-1 text-slate-400 hover:text-slate-600 p-2 rounded-full">
                         <Send size={20} />
                    </button>
                </div>
            </div>


             <div className="desktop:mb-[197px] tablet:mb-[237px] mb-[118px]">
                <p className="text-center font-myVazirRegular text-base text-Gray-600 mb-[6px]" dir='ltr'>:افراد معمولا در این باره میپرسند</p>
                <div className="flex flex-wrap justify-center gap-2">
                    {suggestedQuestions.map((question) => (
                        <button
                            key={question.id}
                            className="py-2 h-10 px-[14px] font-myVazirRegular text-base text-Gray-600 bg-white rounded-full border border-Gray-400 hover:bg-slate-50 transition-colors"
                        >
                            {question.text}
                        </button>
                    ))}
                </div>
            </div>


         <div className="text-center text-sm text-Gray-600 mb-4">
                سروبات جایگزین تراپیست نیست. در شرایط حاد با تراپیست صحبت کنید.
            </div> 
        </div>
    );
};

export default ChatSection;