import image from "../assets/images/159.jpg";
import DocumentStateBadge from "./ArticleBadge";
import heart from "../assets/icons/heart.svg"
import bookmark from "../assets/icons/bookmark.svg"
import { ReactComponent as Arrow } from "../assets/icons/arrow-left-green.svg";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Heart } from "../assets/icons/heart.svg"
import { ReactComponent as Bookmark } from "../assets/icons/bookmark.svg"

interface ArticleCardProps {
    title: string;
    subtitle: string;
    className: string;
}

function ArticleCard({ title, subtitle, className }: ArticleCardProps) {
    const navigate = useNavigate();
    return (
        <div className={`rounded-[26px] border p-6 
            desktop:w-[608px] desktop:h-[700px] 
            doublexl:w-[848px] doublexl:h-[700px]
            tablet:w-[696px] tablet:h-[700px] 
            w-[358px] h-[660px] 
            flex flex-col justify-between ${className}`}>
            <div>
                <div className="relative">
                    <img src={image} alt="image" className="rounded-[20px] 
                        desktop:w-[560px] desktop:h-[373px]
                        doublexl:w-[800px] doublexl:h-[373px] 
                        tablet:w-[648px] tablet:h-[373px] 
                        w-[310px] h-[373px] 
                        object-cover" />
                    
                    {/* Badge positioned at the right bottom of the image */}
                    <div className="absolute bottom-3 right-3">
                        <DocumentStateBadge category={"اضطراب"}></DocumentStateBadge>
                    </div>
                </div>

                <div className="desktop:mt-[32px] tablet:mt-[34px] mt-[46px]">
                    <div className="flex flex-row items-center justify-between desktop:text-sm font-myVazirFaNumRegular">
                        <p className="flex flex-row items-center gap-1">
                            <span className="text-gray-800">زمان مطالعه:</span>
                            <span className="text-gray-500">4 دقیقه</span>
                        </p>
                        <p className="text-gray-400">19 آوریل 2025</p>
                    </div>

                    <div className="flex flex-col mt-5">
                        <h4 className="font-myPeydaMedium desktop:text-[28px] desktop:1920:text-[32px] tablet:text-[28px] mobile:text-[22px]">{title}</h4>
                        <h5 className="font-myVazirRegular desktop:text-base pt-[6px]">{subtitle}</h5>
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center justify-between 
                desktop:w-[560px] 
                doublexl:w-[800px] 
                tablet:w-[648px] 
                w-[310px] 
                h-12 rounded-xl px-[6px]">

                <div className="flex flex-row gap-[6px] items-center">
                    <div className="bg-background-BG w-9 h-9 rounded-[9px] flex flex-row justify-center p-[6px]">
                        <Bookmark className="text-primary-200"></Bookmark>
                    </div>
                    <div className="bg-background-BG w-9 h-9 rounded-[9px] flex flex-row justify-center p-[6px]">
                        <Heart className="text-primary-200"></Heart>
                    </div>
                </div>

                <button className="flex flex-row items-center gap-[10px] text-primary-400" onClick={() => navigate('/articles')}>
                    <p className="whitespace-nowrap font-myVazirMedium desktop:text-xl tablet:text-xl text-base">
             بیشتر بخوانید
                    </p>
                    <Arrow></Arrow>
                </button>
            </div>
        </div>
    );
}

export default ArticleCard;