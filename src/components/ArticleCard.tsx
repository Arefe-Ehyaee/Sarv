import { useNavigate } from "react-router-dom";
import DocumentStateBadge from "./ArticleBadge";
import { ReactComponent as Arrow } from "../assets/icons/arrow-left-green.svg";
import { ReactComponent as Heart } from "../assets/icons/heart.svg";
import { ReactComponent as Bookmark } from "../assets/icons/bookmark.svg";
import moment from "jalali-moment";
import { ReactComponent as Calendar } from "../assets/icons/calendar.svg";

interface ArticleCardProps {
  title: string;
  subtitle: string;
  image: string;
  category: string;
  readTime: string;
  slug: string;
  className?: string;
  createdAt: number;
  imageTitle: string
}

function ArticleCard({
  title,
  subtitle,
  className,
  image,
  category,
  readTime,
  slug,
  createdAt
}: ArticleCardProps) {
  const navigate = useNavigate();
  let dateValue = createdAt;

  // If it's a number-like string, parse it
  if (!isNaN(Number(createdAt))) {
    // If it's seconds, multiply by 1000
    const num = Number(createdAt);
    dateValue = num < 1e12 ? num * 1000 : num;
  }

  const formattedDate = moment(dateValue).isValid()
    ? moment(dateValue).locale("fa").format("D MMMM YYYY")
    : "";

  return (
    <div
      className={`rounded-[26px] border
        w-full h-[620px] 
        flex flex-col justify-between ${className}`}
    >
      <div>
        <div className="relative">
          <img
            src={image.startsWith("http") ? image : `http://${image}`}
            alt="Article"
            className="rounded-t-[20px] 
       desktop:h-[373px]
       doublexl:h-[373px] 
       tablet:h-[373px] 
       w-full h-[373px] 
       object-cover"
          />
          <div className="absolute bottom-3 right-3">
            <DocumentStateBadge category={category} />
          </div>
        </div>


        <div className="desktop:mt-[24px] tablet:mt-[34px] mt-[46px] px-6">
          <div className="flex flex-row items-center justify-between desktop:text-sm font-myVazirFaNumRegular">
            <p className="flex flex-row items-center gap-1">
              <span className="text-Gray-800">زمان مطالعه:</span>
              <span className="text-Gray-500">{readTime} دقیقه</span>
            </p>
            <p className="flex flex-row items-center gap-[6px]">
              <Calendar className="text-primary-700 w-6 h-6" />
              <p className="text-Gray-500">{formattedDate}</p>
            </p>
          </div>

          <div className="flex flex-col mt-5">
            <h4 className="font-myPeydaMedium desktop:text-[20px] desktop:1920:text-[32px] tablet:text-[28px] mobile:text-[22px]">
              {title}
            </h4>
            <h5 className="font-myVazirRegular desktop:text-base pt-[6px]">
              {subtitle}
            </h5>
          </div>
        </div>
      </div>

      <div
        className="flex flex-row items-center justify-between
          h-12 rounded-xl p-6 mb-6"
      >
        <div className="flex flex-row gap-[6px] items-center">
          <div className="bg-background-BG w-9 h-9 rounded-[9px] flex flex-row justify-center p-[6px]">
            <Bookmark className="text-primary-200" />
          </div>
          <div className="bg-background-BG w-9 h-9 rounded-[9px] flex flex-row justify-center p-[6px]">
            <Heart className="text-primary-200" />
          </div>
        </div>

        <button
          className="flex flex-row items-center gap-[10px] text-primary-400"
          onClick={() => navigate(`/articles/${slug}`)}
        >
          <p className="whitespace-nowrap font-myVazirMedium desktop:text-xl tablet:text-xl text-base">
            بیشتر بخوانید
          </p>
          <Arrow />
        </button>
      </div>
    </div>
  );
}

export default ArticleCard;
