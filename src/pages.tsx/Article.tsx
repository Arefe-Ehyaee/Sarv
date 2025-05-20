import tree from "../assets/icons/treeArticles.svg";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ArticleCard from "../components/ArticleCard";
import Footer from "../components/Footer";
import { ReactComponent as Arrow } from "../assets/icons/arrow-left-green.svg";
import svg1 from "../assets/images/backTree_big.svg";
import svg2 from "../assets/images/backTree_small.svg";
import ArticlesCategory from "../components/ArticlesCategory";
import right from "../assets/icons/chevron-right.svg"
import { ReactComponent as Calendar } from "../assets/icons/calendar.svg";
import { ReactComponent as Clock } from "../assets/icons/clock.svg";
import { ReactComponent as Heart } from "../assets/icons/heart.svg"
import { ReactComponent as Bookmark } from "../assets/icons/bookmark.svg"

interface ArticleProps {
    articleImage: string;
    heading: string;
    subHeading: string;
    date: string;
    category: string;
    time: string;
}

function Article({ articleImage, heading, subHeading, date, category, time }: ArticleProps) {

    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen text-gray-950 bg-gray-50 overflow-hidden">

            <div className="hidden desktop:block">
                {/* Background SVGs */}
                <img
                    src={svg1}
                    alt="Background Left"
                    className="absolute left-0 top-[6%] z-0 pointer-events-none"
                />

            </div>

            {/* Content */}
            <div className="relative z-10">
                <Navbar />

                <div className="desktop:px-[96px] tablet:px-6 px-4">

                    <button className="flex flex-row gap-[10px] items-center mt-[50px]" onClick={() => navigate('/articles')}>
                        <img src={right} alt="" />
                        <span className="font-myVazirRegular text-gray-600 desktop:text-[18px] tablet:text-[18px] text-[14px]">بازگشت به مقالات</span>
                    </button>
                    <div className='my-[30px]'>
                        <p className="font-myPeydaSemibold desktop:text-[36px] tablet:text-[32px] text-[28px]">{heading}</p>
                        <p className="font-myVazirRegular desktop:text-[16px] tablet:text-[16px] text-[14px]">{subHeading}</p>
                    </div>

                    <div className="flex flex-row justify-between items-center font-myVazirFaNumRegular mb-[14px]">

                        <div className="flex flex-row  desktop:gap-[20px] tablet:gap-[20px] gap-[10px]">
                            <p className="flex flex-row gap-[6px]"> <Clock className="text-primary-700 w-6 h-6"></Clock> <span className="text-gray-500">{time}</span> </p>
                            <p className="flex flex-row gap-[6px]"> <Calendar className="text-primary-700 w-6 h-6"></Calendar> <span className="text-gray-500">{date}</span></p>
                        </div>

                        <div className="flex flex-row items-center gap-[6px]">دسته بندی:
                            <div className="font-myVazirRegular desktop:text-base tablet:text-base text-sm text-center rounded-full px-[10px] py-[4px] bg-primary-50 border border-primary-100 text-primary-600">
                                {category}</div> </div>


                    </div>

                    <img src={articleImage} alt="articleImage" className="object-cover rounded-[20px] mx-auto w-full desktop:h-[565px] tablet:h-[565px] h-[366px]" />
                <div className="flex flex-row gap-[20px] items-center justify-end mt-[10px]">
                    <div className=" bg-background-BG  rounded-[9px] flex flex-row justify-center gap-2 p-[6px]">
                        <Bookmark className="text-primary-700"></Bookmark>
                        <span className="font-myVazirRegular desktop:text-base tablet:text-base text-sm text-gray-500">ذخیره کردن مقاله</span>
                    </div>
                    <div className="bg-background-BG rounded-[9px] flex flex-row justify-center gap-2 p-[6px]">
                        <Heart className="text-primary-800"></Heart>
                        <div className="font-myVazirRegular desktop:text-base tablet:text-base text-sm text-gray-500">افزودن به علاقمندی‌ها</div>
                    </div>
                </div>

                    <div className="mb-[100px] mt-[30px] text-justify font-myVazirRegular desktop:text-[18px] tablet:text-[18px] text-[16px]">
                        انسان‌ها موجوداتی اجتماعی هستند؛ صحبت کردن، شنیده شدن و درک شدن از نیازهای اساسی ماست.انسان‌ها موجوداتی اجتماعی هستند؛ صحبت کردن، شنیده شدن و درک شدن از نیازهای اساسی ماست.انسان‌ها موجوداتی اجتماعی هستند؛ صحبت کردن، شنیده شدن و درک شدن از نیازهای اساسی ماست.انسان‌ها موجوداتی اجتماعی هستند؛ صحبت کردن، شنیده شدن و درک شدن از نیازهای اساسی ماست.انسان‌ها موجوداتی اجتماعی هستند؛ صحبت کردن، شنیده شدن و درک شدن از نیازهای اساسی ماست.انسان‌ها موجوداتی اجتماعی هستند؛ صحبت کردن، شنیده شدن و درک شدن از نیازهای اساسی ماست.
                    </div>
                </div>

                <div className="relative h-[269px] bg-primary-800 mt-[120px] flex flex-col items-center justify-center text-center">
                    <h5 className="text-primary-200 font-myPeydaSemibold desktop:text-[32px] tablet:text-[32px] text-[22px]">
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

export default Article;
