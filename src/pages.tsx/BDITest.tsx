// src/BDITest.tsx
import React, { useState } from 'react';

const questions = [
  {
    text: "غمگین نیستم.",
    options: [0, 1, 2, 3]
  },
  {
    text: "به آینده امیدوارم.",
    options: [0, 1, 2, 3]
  },
  {
    text: "ناکام نیستم.",
    options: [0, 1, 2, 3]
  },
  {
    text: "مثل گذشته از زندگی ام راضی هستم.",
    options: [0, 1, 2, 3]
  },
  {
    text: "احساس تقصیر نمی کنم.",
    options: [0, 1, 2, 3]
  },
  {
    text: "انتظار مجازات ندارم.",
    options: [0, 1, 2, 3]
  },
  {
    text: "از خود راضی هستم.",
    options: [0, 1, 2, 3]
  },
  {
    text: "بدتر از سایرین نیستم.",
    options: [0, 1, 2, 3]
  },
  {
    text: "هرگز به فکر خودکشی نمی افتم.",
    options: [0, 1, 2, 3]
  },
  {
    text: "بیش از حد معمول گریه نمی کنم.",
    options: [0, 1, 2, 3]
  },
  {
    text: "کم حوصله تر از گذشته نیستم.",
    options: [0, 1, 2, 3]
  },
  {
    text: "مثل همیشه مردم را دوست دارم.",
    options: [0, 1, 2, 3]
  },
  {
    text: "مانند گذشته تصمیم می گیرم.",
    options: [0, 1, 2, 3]
  },
  {
    text: "جذابیت گذشته را دارم.",
    options: [0, 1, 2, 3]
  },
  {
    text: "به خوبی گذشته کار می کنم.",
    options: [0, 1, 2, 3]
  },
  {
    text: "مثل همیشه خوب می خوابم.",
    options: [0, 1, 2, 3]
  },
  {
    text: "بیشتر از گذشته خسته نمی شوم.",
    options: [0, 1, 2, 3]
  },
  {
    text: "اشتهایم تغییری نکرده است.",
    options: [0, 1, 2, 3]
  },
  {
    text: "اخیراً وزن کم نکرده ام.",
    options: [0, 1, 2, 3]
  },
  {
    text: "بیش از گذشته بیمار نمی شوم.",
    options: [0, 1, 2, 3]
  },
  {
    text: "میل جنسی ام تغییری نکرده است.",
    options: [0, 1, 2, 3]
  }
];

const BDITest: React.FC = () => {
  const [responses, setResponses] = useState<number[]>(Array(questions.length).fill(-1));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number | null>(null);

  const handleChange = (value: number) => {
    const newResponses = [...responses];
    newResponses[currentQuestionIndex] = value;
    setResponses(newResponses);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateScore();
    }
  };

  const calculateScore = () => {
    const totalScore = responses.reduce((acc, curr) => acc + (curr !== -1 ? curr : 0), 0);
    setScore(totalScore);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">تست افسردگی بک (BDI-II)</h1>
      {score === null ? (
        <>
          <div className="mb-4">
            <label className="block mb-2">{`${currentQuestionIndex + 1}. ${questions[currentQuestionIndex].text}`}</label>
            <div className="flex flex-col">
              {questions[currentQuestionIndex].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleChange(option)}
                  className={`border border-Gray-300 rounded p-2 mb-2 ${responses[currentQuestionIndex] === option ? 'bg-blue-500 text-white' : 'bg-white'}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={nextQuestion}
            className="bg-blue-500 text-white rounded p-2"
            disabled={responses[currentQuestionIndex] === -1}
          >
            {currentQuestionIndex < questions.length - 1 ? 'سوال بعدی' : 'محاسبه نمره'}
          </button>
        </>
      ) : (
        <div className="mt-4">
          <h2 className="text-xl font-bold">نمره شما: {score}</h2>
          <p>
            {score <= 10 && "شما سالم هستید (فاقد افسردگی)."}
            {score > 10 && score <= 16 && "افسردگی خفیف."}
            {score > 16 && score <= 20 && "نیازمند مشورت با روان پزشک."}
            {score > 20 && score <= 30 && "نسبتاً افسرده."}
            {score > 30 && score <= 40 && "افسردگی بالینی (شدید)."}
            {score > 40 && "افسردگی بیش از حد."}
          </p>
        </div>
      )}
    </div>
  );
};

export default BDITest;
