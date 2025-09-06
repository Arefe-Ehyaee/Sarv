import { useNavigate } from "react-router-dom";
import { ReactComponent as Calendar } from "../assets/icons/calendar.svg";
import { ReactComponent as Clock } from "../assets/icons/clock.svg";
import { ReactComponent as Award } from "../assets/icons/award.svg";
import { getTestStatus, TestKey } from "../utils/utils_tests";

interface ProfileTestCardProps {
  testName: string;
  test_en_name: string;
  description: string;
  image: string;
  score: number;
  slug: string;
  onViewResult: () => void; 
}

const maxScores: Record<string, number> = {
  bdi: 63,
  bai: 63,
  ghq: 84,
};

function ProfileTestCard({ testName, test_en_name, onViewResult, description, image, score, slug }: ProfileTestCardProps) {
  const navigate = useNavigate();

  const maxScore = maxScores[test_en_name?.toLowerCase()] || 100;

  return (
    <div className="flex flex-col justify-between w-full max-w-[480px] h-[300px] mx-auto bg-background-BG rounded-[20px] border border-primary-100 py-[18px] px-5 relative overflow-hidden">

      {/* Tag */}
      <div className="font-myVazirRegular w-fit desktop:text-sm tablet:text-sm text-xs text-center rounded-full px-[10px] py-[4px] bg-primary-50 border border-primary-100 text-primary-600">
        اضطراب و افسردگی
      </div>

      {/* Test name */}
      <p className="font-myYekanBold text-gray-800 desktop:text-[20px] tablet:text-lg text-base mt-[10px]">{testName}</p>

      {/* Metadata */}
      <div className="flex flex-col desktop:flex desktop:flex-row gap-4 desktop:items-center items-start mt-[8px] mb-[16px]">
        <p className="flex flex-row gap-[3px]">
          {/* <Clock className="text-Gray-400 w-6 h-6" /> */}
          <Award className="text-success-700 w-6 h-6" />
          <span className="text-success-700 text-sm desktop:text-base font-myYekanRegular">{getTestStatus(test_en_name.toLowerCase() as TestKey, score)} </span>
        </p>
        <p className="flex flex-row gap-[2px]">
          <Award className="text-success-700 w-6 h-6" />
          <span className="text-success-700 text-sm desktop:text-base font-myYekanFaNumRegular">
           نتیجه آزمون: {score} از {maxScore} 
          </span>
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-4">
        <button
          onClick={() => navigate(`/test/${slug}/start`)}
          className="w-full bg-white hover:bg-primary-300 text-[#2C5031] border-[0.6px] border-[#2C5031] desktop:text-base tablet:text-sm text-xs font-myVazirRegular desktop:h-[44px] tablet:h-[44px] h-[41px] rounded-full transition-colors duration-200"
        >
          تکرار آزمون
        </button>
        <button
          onClick={onViewResult}
          className="w-full bg-white hover:bg-primary-300 text-[#2C5031] border-[0.6px] border-[#2C5031] desktop:text-base tablet:text-sm text-xs font-myVazirRegular desktop:h-[44px] tablet:h-[44px] h-[41px] rounded-full transition-colors duration-200"
        >
          مشاهده نتیجه
        </button>

      </div>
    </div>
  );
}

export default ProfileTestCard;