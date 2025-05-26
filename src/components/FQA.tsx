import React, { useState } from "react";
import Down from "../assets/icons/Down.svg"

const FAQSection = () => {
  const faqs = Array(4).fill({
    question: "چطور از  سروبات استفاده کنم؟",
    answer: "برای استفاده از سرویس، ابتدا ثبت‌نام کنید، سپس وارد پنل کاربری شوید و مراحل راه‌اندازی را دنبال کنید.",
  });

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto mt-[150px] desktop:px-24 tablet:px-6 px-4">
      <h2 className="text-3xl font-myPeydaSemibold  text-right mb-10">سوالات متداول</h2>
      <div className="space-y-2">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b">
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full text-right font-myVazirMedium text-2xl py-4 flex justify-between items-center"
            >
              <span>{faq.question}</span>
              <span>{openIndex === idx ? "▲" : <img src={Down}></img>}</span>
            </button>
            {openIndex === idx && (
              <div className="px-4 pb-4 text-right text-Gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
