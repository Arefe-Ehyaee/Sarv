import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ReactComponent as Arrow } from "../assets/icons/arrow-left-green.svg";
import svg1 from "../assets/images/backTree_big.svg";
import right from "../assets/icons/chevron-right.svg";
import { ReactComponent as Calendar } from "../assets/icons/calendar.svg";
import { ReactComponent as Clock } from "../assets/icons/clock.svg";
import { ReactComponent as Heart } from "../assets/icons/heart.svg";
import { ReactComponent as Bookmark } from "../assets/icons/bookmark.svg";
import CustomButton from "../components/CustomeButton";
import testCover from "../assets/images/GHQ.png";
import { testData, TestKey } from "../utils/utils_tests";

function Test() {
  const { testName } = useParams<{ testName: string }>();
  const navigate = useNavigate();

  if (!testName || !(testName in testData)) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        آزمون پیدا نشد
      </div>
    );
  }

  const testInfo = testData[testName as TestKey];

  return (
    <div className="relative min-h-screen text-Gray-950 bg-Gray-50 overflow-hidden">
      <div className="hidden desktop:block">
        <img src={svg1} alt="Background Left" className="absolute left-0 top-[6%] z-0 pointer-events-none" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <div className="desktop:px-[96px] tablet:px-6 px-4">
          <button className="flex flex-row gap-[10px] items-center mt-[50px]" onClick={() => navigate('/tests')}>
            <img src={right} alt="" />
            <span className="font-myVazirRegular text-Gray-600 text-[14px] tablet:text-[18px]">بازگشت به تست‌های روانشناسی</span>
          </button>

          <div className="my-[30px]">
            <p className="font-myPeydaSemibold text-[28px] tablet:text-[32px] desktop:text-[36px]">
              {testInfo.name}
            </p>
            <p className="font-myVazirRegular text-[14px] tablet:text-[16px]">توضیحات</p>
          </div>

          <div className="flex flex-row items-center gap-[6px] mb-[10px] font-myVazirFaNumRegular desktop:hidden tablet:hidden">
            دسته بندی:
            <div className="rounded-full px-[10px] py-[4px] bg-primary-50 border border-primary-100 text-primary-600 text-sm">
              {testInfo.category}
            </div>
          </div>

          <div className="flex flex-row justify-between items-center font-myVazirFaNumRegular mb-[14px]">
            <div className="flex flex-row gap-[10px] tablet:gap-[20px] desktop:gap-[20px]">
              <p className="flex flex-row gap-[6px]">
                <Clock className="text-primary-700 w-6 h-6" />
                <span className="text-Gray-500">{testInfo.time}</span>
              </p>
              <p className="flex flex-row gap-[6px]">
                <Calendar className="text-primary-700 w-6 h-6" />
                <span className="text-Gray-500">{testInfo.questionsCount} سوال</span>
              </p>
            </div>

            <div className="desktop:flex tablet:flex hidden flex-row items-center gap-[6px]">
              دسته بندی:
              <div className="rounded-full px-[10px] py-[4px] bg-primary-50 border border-primary-100 text-primary-600 text-sm">
                {testInfo.category}
              </div>
            </div>
          </div>

          <img
            src={testCover}
            alt="articleImage"
            className="object-cover rounded-[20px] w-full h-[366px] tablet:h-[565px] desktop:h-[565px] mx-auto"
          />

          <div className="flex flex-row justify-between mt-[10px]">
            <CustomButton
              text={"شروع آزمون"}
              className={"bg-primary-400 text-white w-24 h-10"}
              handleOnClick={() => navigate(`/test/${testName}/questions`)}
            />

            <div className="flex flex-row gap-[20px] items-center mt-[10px] justify-between desktop:justify-end tablet:justify-end">
              <div className="bg-background-BG rounded-[9px] flex flex-row justify-center gap-2 p-[6px]">
                <Bookmark className="text-primary-700" />
                <span className="hidden tablet:block desktop:block text-sm text-Gray-500">ذخیره کردن تست</span>
              </div>
              <div className="bg-background-BG rounded-[9px] flex flex-row justify-center gap-2 p-[6px]">
                <Heart className="text-primary-800" />
                <span className="hidden tablet:block desktop:block text-sm text-Gray-500">افزودن به علاقمندی‌ها</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[269px] bg-primary-800 mt-[120px] flex flex-col items-center justify-center text-center">
          <h5 className="text-primary-200 font-myPeydaSemibold text-[22px] tablet:text-[32px] desktop:text-[32px]">
            خود آگاهی از این مسیر شروع میشه
          </h5>
          <button className="mt-5">
            <div className="flex items-center gap-2 text-primary-300 font-myVazirRegular text-lg">
              درباره‌ی خدمات ما بیشتر بدانید
              <Arrow />
            </div>
          </button>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Test;
