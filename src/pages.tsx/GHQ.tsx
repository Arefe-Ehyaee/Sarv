import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import svgSmall from '../assets/icons/smalltreeBg.svg';
import right from '../assets/icons/chevron-right.svg';
import { ReactComponent as Left } from '../assets/icons/chevron-left.svg';

// Question type
type GHQQuestion = {
    id: number;
    text: string;
    options: string[];
};

// GHQ-28 Questions
const ghqQuestions: GHQQuestion[] = [
    {
        id: 1,
        text: "آیا از یک ماه گذشته تا به امروز کاملا احساس کرده اید که خوب و سالم هستید ؟",
        options: ["بیشتر از حد معمول", "در حد معمول", "کمتر از حد معمول", "خیلی کمتر از حد معمول"],
    },
    {
        id: 2,
        text: "آیا از یک ماه گذشته تا به امروز احساس کرده اید که به داروهای تقویتی نیاز دارید ؟",
        options: ["اصلاً", "در حد معمول", "بیشتر از حد معمول", "خیلی بیشتر از حد معمول"],
    },
    {
        id: 3,
        text: "آیا از یک ماه گذشته تا به امروز احساس ضعف و سستی کرده اید ؟",
        options: ["اصلاً", "در حد معمول", "بیشتر از حد معمول", "خیلی بیشتر از حد معمول"],
    },
    {
        id: 4,
        text: "آیا از یک ماه گذشته تا به امروز احساس کرده اید که بیمار هستید ؟",
        options: ["اصلاً", "در حد معمول", "بیشتر از حد معمول", "خیلی بیشتر از حد معمول"],
    },
    {
        id: 5,
        text: "آیا از یک ماه گذشته تا به امروز سر درد داشته اید ؟",
        options: ["اصلاً", "در حد معمول", "بیشتر از حد معمول", "خیلی بیشتر از حد معمول"],
    },
    {
        id: 6,
        text: "آیا از یک ماه گذشته تا به امروز احساس کرده اید که سرتان را محکم با چیزی مثل دستمال بسته اند یا اینکه فشاری به سرتان وارد می شود ؟",
        options: ["اصلاً", "در حد معمول", "بیشتر از حد معمول", "خیلی بیشتر از حد معمول"],
    },
    {
        id: 7,
        text: "آیا از یک ماه گذشته تا به امروز احساس کرده اید که بعضی وقتها بدنتان داغ و یا سرد می شود ؟",
        options: ["اصلاً", "در حد معمول", "بیشتر از حد معمول", "خیلی بیشتر از حد معمول"],
    },
    {
        id: 8,
        text: "آیا از یک ماه گذشته تا به امروز بر اثر نگرانی دچار بی‌خوابی شده‌اید؟",
        options: ["اصلاً", "در حد معمول", "بیشتر از حد معمول", "خیلی بیشتر از حد معمول"],
    },
    // Add the remaining 20 questions here...
];

const GHQTest: React.FC = () => {
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [answers, setAnswers] = useState<{ [key: number]: number }>({});

    const handleOptionClick = (optionIndex: number): void => {
        setAnswers((prev) => ({
            ...prev,
            [ghqQuestions[currentQuestion].id]: optionIndex,
        }));

        if (currentQuestion < ghqQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            console.log("Submitted answers:", answers);
            // navigate("/results") or handle submission
        }
    };

    const goBack = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const question = ghqQuestions[currentQuestion];

    return (
        <div className="relative min-h-screen bg-Gray-100 text-Gray-950">
            <div className="hidden desktop:flex desktop:justify-center desktop:items-center desktop:min-h-screen">
                {/* Background SVGs */}
                <img
                    src={svgSmall}
                    alt="Background Left"
                    className="absolute left-[4%] bottom-0 pointer-events-none h-[876px] z-0"
                />

                <div className="flex flex-col bg-yellow-300 w-full mx-[96px]">
                    <button
                        className="flex flex-row gap-[10px] items-center mb-[30px]"
                        onClick={() => navigate('/articles')}
                    >
                        <img src={right} alt="" />
                        <span className="font-myVazirRegular text-Gray-600 desktop:text-[18px]">
                            خروج از آزمون
                        </span>
                    </button>

                    <h5 className="font-myPeydaSemibold text-[28px]">
                        سوال {question.id} از ۲۸
                    </h5>

                    <div className='relative z-10 bg-primary-400 w-full px-[22px] py-[28px] rounded-[20px]'>

                        <p className="mt-[10px] text-[20px]">{question.text}</p>

                        <div className="mt-8 space-y-4">
                            {question.options.map((opt, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => handleOptionClick(idx)}
                                    className={`flex items-center gap-2 cursor-pointer px-4 py-2 border border-Gray-200 rounded-lg hover:bg-primary-100 transition-all duration-200 ${answers[question.id] === idx ? 'bg-primary-100' : ''
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        checked={answers[question.id] === idx}
                                        readOnly
                                    />
                                    <label className="text-[18px] cursor-pointer">{opt}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-row items-center justify-between mt-[30px] px-[96px]">
                        {currentQuestion > 0 && (
                            <button
                                onClick={goBack}
                                className="text-gray-500 underline text-[16px]"
                            >
                                بازگشت
                            </button>
                        )}
                        {currentQuestion < ghqQuestions.length - 1 && (
                            <div className="flex flex-row items-center">
                                <span className="font-myVazirRegular text-lg text-Gray-600">
                                    سوال بعد
                                </span>
                                <button
                                    className="flex flex-row justify-center items-center mr-[6px] text-primary-600 rounded-[4px] bg-primary-200 border border-primary-300 w-[42px] h-[42px]"
                                    onClick={() => setCurrentQuestion((prev) => prev + 1)}
                                >
                                    <Left />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GHQTest;
