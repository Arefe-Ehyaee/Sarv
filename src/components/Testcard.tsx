import { useNavigate } from "react-router-dom";
import GHQ from "../assets/images/GHQ.png";
import { ReactComponent as Calendar } from "../assets/icons/calendar.svg";
import { ReactComponent as Clock } from "../assets/icons/clock.svg";

interface TestCardProps {
    testName: string;
    description: string;
    image?: string;
}

function TestCard({ testName, description, image }: TestCardProps) {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col justify-between desktop:w-[608px] h-[340px] mx-auto bg-background-BG rounded-[20px] border border-primary-100 py-[20px] px-6 relative overflow-hidden">
            {/* Tilted Badge */}
            <div className="absolute flex flex-row justify-center -top-2 -left-8 w-[160px] h-8 text-primary-600 py-1 bg-primary-50 transform -rotate-45 text-center">
                <span className="font-myVazirRegular text-end flex flex-row justify-center pr-14 desktop:text-base tablet:text-base text-sm">رایگان</span>
            </div>

            {/* Header with illustration */}
            <div className="flex items-start justify-between mb-8">
                <img src={GHQ} alt="" className="w-[120px] h-[120px] object-cover rounded-[20px] ml-[10px]" />
                {/* Left side - Title and badge */}
                <div className="flex-1">
                    {/* Main title */}
                    <h1 className="desktop:text-[20px] font-myPeydaMedium text-Gray-800 mb-[20px] text-right">
                        آزمون سلامت عمومی (GHQ)
                    </h1>

                    {/* Stats */}
                    <div className="flex items-center gap-8 text-Gray-500 mb-2 font-myVazirRegular desktop:text-base tablet:text-base text-sm">
                        <div className="flex items-center gap-2">
                            <Clock className="text-primary-700"></Clock>
                            <span>۱۵ دقیقه</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="text-primary-700"></Calendar>
                            <span>۲۸ سوال</span>
                        </div>
                    </div>

                    {/* Subtitle */}
                    <div className="bg-primary-50 text-primary-600 px-[10px] py-1 h-8 rounded-2xl inline-block font-myVazirRegular desktop:text-base tablet:text-base text-sm">
                        سلامت روان
                    </div>
                </div>
            </div>

            {/* Description */}
            <div className="text-right mb-8">
                <p className="text-Gray-700 leading-relaxed font-myVazirRegular desktop:text-sm tablet:text-sm text-xs text-justify line-clamp-4">
                    پرسشنامه سلامت عمومی (GHQ) ابزاری معتبر برای غربالگری سلامت روان است که به شناسایی ناراحتی‌های
                    احساسی و نشانه‌های اولیه مشکلات روانی کمک می‌کند. این آزمون آگاهی فرد را نسبت به وضعیت روانی‌اش
                    افزایش داده و در صورت نیاز، مسیر دریافت حمایت را هموار می‌سازد.
                </p>
            </div>

            {/* Start button */}
            <button onClick={()=>navigate('/test')} className="w-full bg-primary-400 hover:bg-primary-300 text-white desktop:text-base tablet:text-base text-sm font-myVazirSemibold desktop:h-[44px] tablet:h-[44px] h-[41px] rounded-full transition-colors duration-200">
                شروع آزمون
            </button>
        </div>
    );
};

export default TestCard;