
import DocumentStateBadge from "./ArticleBadge";
import heart from "../assets/icons/heart.svg"
import bookmark from "../assets/icons/bookmark.svg"
import { ReactComponent as Arrow } from "../assets/icons/arrow-left-green.svg";
import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomeButton";

interface TherapistCardProps {
    therapistName: string;
    therapistSubHead: string;
    therapistImg: string;
    profession: string[];
}

function TherapistCard({ therapistName, therapistSubHead, therapistImg, profession }: TherapistCardProps) {
    const navigate = useNavigate();
    return (
        <div className="border rounded-[20px] px-[24px] py-[20px] w-[288px] desktop:h-[548px] h-[516px]">
            <img src={therapistImg} alt="doctorImg" className="rounded-[20px]" />


            <div className="flex flex-col mt-5">
                <h4 className="font-myPeydaMedium desktop:text-[20px] tablet:text-[18px] text-[16px] text-gray-950">{therapistName}</h4>
                <h5 className="font-myVazirRegular desktop:text-base mt-[6px] text-gray-950">{therapistSubHead}</h5>

                <h4 className="font-myVazirRegular desktop:text-[14px] tablet:text-[14px] mobile:text-[12px] text-gray-400 mt-[10px] mb-[4px]">تخصص</h4>
<div className="flex flex-wrap gap-2 mb-[20px]">
    {profession.map((item, index) => (
        <span
            key={index}
            className="font-myPeydaRegular desktop:text-base text-primary-400 px-[8px] py-[4px] bg-primary-50 rounded-[4px]"
        >
            {item}
        </span>
    ))}
</div>

                <h4 className="font-myVazirRegular desktop:text-[14px] tablet:text-[14px] mobile:text-[12px]">چند زبانه</h4>

                <div className=" flex flex-row items-center justify-between font-myVazirFaNumRegular desktop:text-[14px] tablet:text-[14px] mobile:text-[12px] text-gray-600 mt-[12px] mb-[14px]">
                    102 نظر

                    <div className="flex flex-row-reverse items-center">
                        {[1, 2, 3, 4, 5].map((i) => {
                            const rating = 3.5;

                            if (i <= Math.floor(rating)) {
                                // Full star
                                return (
                                    <svg
                                        key={i}
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-yellow-400 mr-1"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967h4.173c.969 0 1.371 1.24.588 1.81l-3.376 2.453 1.286 3.967c.3.921-.755 1.688-1.54 1.117L10 13.348l-3.376 2.453c-.784.571-1.838-.196-1.539-1.117l1.286-3.967-3.376-2.453c-.783-.57-.38-1.81.588-1.81h4.173l1.286-3.967z" />
                                    </svg>
                                );
                            } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
                                // Half star
                                return (
                                    <svg
                                        key={i}
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-yellow-400 mr-1"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <defs>
                                            <linearGradient id={`halfGrad-${i}`}>
                                                <stop offset="50%" stopColor="currentColor" />
                                                <stop offset="50%" stopColor="lightgray" />
                                            </linearGradient>
                                        </defs>
                                        <path
                                            fill={`url(#halfGrad-${i})`}
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967h4.173c.969 0 1.371 1.24.588 1.81l-3.376 2.453 
            1.286 3.967c.3.921-.755 1.688-1.54 1.117L10 13.348l-3.376 2.453c-.784.571-1.838-.196-1.539-1.117l1.286-3.967-3.376-2.453c-.783-.57-.38-1.81.588-1.81h4.173l1.286-3.967z"
                                        />
                                    </svg>
                                );
                            } else {
                                // Empty star
                                return (
                                    <svg
                                        key={i}
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-gray-300 mr-1"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967h4.173c.969 0 1.371 1.24.588 1.81l-3.376 2.453 
            1.286 3.967c.3.921-.755 1.688-1.54 1.117L10 13.348l-3.376 2.453c-.784.571-1.838-.196-1.539-1.117l1.286-3.967-3.376-2.453c-.783-.57-.38-1.81.588-1.81h4.173l1.286-3.967z" />
                                    </svg>
                                );
                            }
                        })}

                    </div>

                </div>

                <CustomButton text={'رزرو جلسه'} className={"bg-primary-400 text-background-BG desktop:h-[44px] h-10 font-myVazirSemibold desktop:text-base text-sm "}></CustomButton>
            </div>
        </div>
    );
}

export default TherapistCard;

