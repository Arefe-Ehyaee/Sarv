import { useNavigate } from "react-router-dom";
import { ReactComponent as Calendar } from "../assets/icons/calendar.svg";
import { ReactComponent as Clock } from "../assets/icons/clock.svg";
import { ReactComponent as Award } from "../assets/icons/award.svg";

interface ProfileTestCardProps {
  testName: string;
  description: string;
  image?: string;
  score: number;
  slug: string;
}

function ProfileTestCard({ testName, description, image, score, slug }: ProfileTestCardProps) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between w-full h-[252px] mx-auto bg-background-BG rounded-[20px] border border-primary-100 py-[18px] px-5 relative overflow-hidden">
      
      {/* Tag */}
      <div className="font-myVazirRegular w-fit desktop:text-base tablet:text-base text-sm text-center rounded-full px-[10px] py-[4px] bg-primary-50 border border-primary-100 text-primary-600">
        اضطراب و افسردگی
      </div>

      {/* Test name */}
      <p className="font-myPeydaMedium desktop:text-[20px] tablet:text-lg text-base mt-[10px]">{testName}</p>

      {/* Metadata */}
      <div className="flex flex-row gap-4 items-center mt-[10px] mb-[20px]">
        <p className="flex flex-row gap-[3px]">
          <Clock className="text-Gray-400 w-6 h-6" />
          <span className="text-Gray-400 desktop:text-base font-myVazirFaNumRegular">10 دقیقه</span>
        </p>
        <p className="flex flex-row gap-[2px]">
          <Award className="text-success-700 w-6 h-6" />
          <span className="text-success-700 desktop:text-base font-myVazirFaNumRegular">
            نتیجه آزمون: {score} از 100
          </span>
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-row gap-4">
        <button
          onClick={() => navigate(`/test/${slug}/start`)}
          className="w-2/3 bg-Gray-700 hover:bg-primary-300 text-white desktop:text-base tablet:text-sm text-xs font-myVazirRegular desktop:h-[44px] tablet:h-[44px] h-[41px] rounded-full transition-colors duration-200"
        >
          تکرار آزمون
        </button>
        <button
          onClick={() => navigate(`/test/${slug}/result`)}
          className="w-1/3 bg-white hover:bg-primary-300 text-[#2C5031] border-[0.6px] border-[#2C5031] desktop:text-base tablet:text-sm text-xs font-myVazirRegular desktop:h-[44px] tablet:h-[44px] h-[41px] rounded-full transition-colors duration-200"
        >
          مشاهده نتیجه
        </button>
      </div>
    </div>
  );
}

export default ProfileTestCard;