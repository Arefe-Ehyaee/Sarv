import { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import svgSmall from "../assets/icons/smalltreeBg.svg";
import right from "../assets/icons/chevron-right.svg";
import { getTestStatus, TestKey } from "../utils/utils_tests";

interface ResultData {
  score: number;
  message: string;
  type: string;
}

function TestResult() {
  const { testName } = useParams<{ testName: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const [result, setResult] = useState<ResultData | null>(null);
  const formattedTestName = 

  useEffect(() => {
    const resultFromState = location.state as ResultData | null;
    if (resultFromState?.score !== undefined) {
      setResult(resultFromState);
    } else {
      // Fallback to localStorage
      const stored = localStorage.getItem(`${testName}_result`);
      if (stored) {
        setResult(JSON.parse(stored));
      }
    }
  }, [location.state, testName]);

  if (!result) {
    return <div className="text-center p-8">در حال بارگذاری نتیجه...</div>;
  }


  const maxScores: Record<string, number> = {
    bdi: 63,
    bai: 63,
    ghq: 84,
  };

  const maxScore = maxScores[result.type] || 100;
  const percent = Math.min(100, Math.round((result.score / maxScore) * 100));

  return (
    <div className="relative min-h-screen flex flex-col items-start w-full justify-center bg-Gray-100 text-Gray-950 px-4 desktop:px-[96px]">
      <img
        src={svgSmall}
        alt="Background Left"
        className="absolute left-[4%] bottom-0 pointer-events-none h-[876px] z-0 hidden desktop:block"
      />

      <h2 className="font-myVazirFaNumRegular bg-primary-200 desktop:text-lg tablet:text-lg mobile:text-base mb-[30px] border rounded-full px-[18px] py-[6px]">
        نتیجه آزمون شما آماده است
      </h2>

      <div className="bg-white px-[22px] py-7 rounded-[20px] mx-auto z-10 relative w-full">
        <h1 className="text-3xl font-myPeydaSemibold mb-4">نتیجه آزمون {testName?.toUpperCase()}</h1>
        <p className="text-gray-600 mb-2 text-lg font-myVazirFaNumMedium">
          <strong>امتیاز شما:</strong> {result.score} از {maxScore}
        </p>

        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <div
            className="bg-primary-600 h-4 rounded-full"
            style={{ width: `${percent}%` }}
          ></div>
        </div>

        <p className="text-sm text-gray-500 mb-4 font-myVazirFaNumRegular">
          درصد شدت: {percent}%
        </p>

<p className="text-sm text-gray-500 mb-4 font-myVazirFaNumRegular">
  وضعیت شما: {getTestStatus(result.type as TestKey, result.score)}
</p>

        <p className="text-gray-700 text-lg mt-2 font-myVazirFaNumRegular">
          <strong>تفسیر:</strong> 
        </p>
      </div>

      <div className="flex flex-row self-end items-center mt-[30px] z-10 relative font-myVazirRegular">
        <button
          onClick={() => navigate("/tests")}
          className="flex flex-row gap-[10px] items-center mb-[30px]"
        >
          بازگشت به لیست آزمون‌ها
          <img
            src={right}
            alt="back"
            className="text-primary-600 rotate-180 border border-primary-300 rounded-[4px] bg-primary-200 p-[6px]"
          />
        </button>
      </div>
    </div>
  );
}

export default TestResult;
