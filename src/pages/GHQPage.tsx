import React, { useState } from 'react';
import svgSmall from '../assets/icons/smalltreeBg.svg';
import right from '../assets/icons/chevron-right.svg';
import { ReactComponent as Left } from '../assets/icons/chevron-left.svg';
import { useNavigate } from 'react-router-dom';
import GHQTest from './GHQ'; // <-- Import the test component

const GHQPage: React.FC = () => {
  const navigate = useNavigate();
  const [started, setStarted] = useState(false);

  if (started) {
    return <GHQTest />;
  }

  return (
    <div className="relative min-h-screen bg-Gray-100 text-Gray-950">
      <div className="hidden desktop:flex desktop:justify-center desktop:items-center desktop:min-h-screen">
        <img
          src={svgSmall}
          alt="Background Left"
          className="absolute left-[4%] bottom-0 pointer-events-none h-[876px] z-0"
        />

        <div className="flex flex-col">
          <button
            className="flex flex-row gap-[10px] items-center mb-[30px]"
            onClick={() => navigate('/articles')}
          >
            <img src={right} alt="" />
            <span className="font-myVazirRegular text-Gray-600 desktop:text-[18px]">
              خروج از آزمون
            </span>
          </button>

          <div className="flex flex-col justify-center items-center">
            <div className="relative z-10 bg-background-BG w-full px-[22px] py-[28px] rounded-[20px] mx-[96px]">
              <h5 className="font-myPeydaSemibold text-[28px]">
                عنوان تست
              </h5>
              <p className="mt-2 text-[18px]">
                لطفاً این قسمت را به دقت مطالعه کنید:
              </p>
              <p className="mt-2">
                می‌خواهیم درباره کسالت و ناراحتی‌های پزشکی و اینکه سلامت عمومی شما در طی یک‌ماه گذشته تا به امروز چگونه بوده است اطلاعاتی بدست آوریم...
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center justify-end mt-[30px]">
            <span className="font-myVazirRegular text-lg text-Gray-600">
              ادامه
            </span>
            <button
              onClick={() => setStarted(true)}
              className="flex flex-row justify-center items-center mr-[6px] text-primary-600 rounded-[4px] bg-primary-200 border border-primary-300 w-[42px] h-[42px] z-10"
            >
              <Left />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GHQPage;
