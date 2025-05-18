import tree from "../assets/icons/treeArticles.svg";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ArticleCard from "../components/ArticleCard";
import Footer from "../components/Footer";
import { ReactComponent as Arrow } from "../assets/icons/arrow-left-green.svg";
import svg1 from "../assets/images/backTree_big.svg";
import svg2 from "../assets/images/backTree_small.svg";
import ArticlesCategory from "../components/ArticlesCategory";


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
                    className="absolute left-0 top-[4%] z-0 pointer-events-none"
                />

            </div>

            {/* Content */}
            <div className="relative z-10">
                <Navbar />

                <div className="desktop:px-[96px] tablet:px-6 px-4">
                    <div className='flex flex-row justify-between mt-[120px]'>
                        <div>
                            <h4 className='font-myPeydaSemibold text-4xl text-gray-950 mb-1'>مقالات سرو</h4>
                            <h5 className='font-myVazirRegular text-lg text-gray-950'>به روزترین مقالات معتبر را اینجا بخوانید. </h5>
                        </div>
                        <img src={tree} alt="sarv" />
                    </div>

                    <img src={articleImage} alt="articleImage" className="object-cover rounded-[20px] mx-auto w-full desktop:h-[565px] tablet:h-[565px] h-[366px]" />

                    <div className="flex flex-row items-center gap-[20px] font-myVazirFaNumRegular mt-2">
                        <div className="font-myVazirRegular text-sm text-center h-[25px] rounded px-1 py-[2px] bg-primary-50 border border-primary-100 text-primary-400">
                            {category}</div>
                        <p className="">زمان مطالعه: <span className="text-gray-500">{time}</span> </p>
                        <p>تاریخ انتشار: <span className="text-gray-500">{date}</span></p>
                    </div>

                    <div className="mt-[10px]">
                        <p className="font-myPeydaSemibold desktop:text-[36px] tablet:text-[32px] text-[28px]">{heading}</p>
                        <p className="font-myVazirRegular desktop:text-[16px] tablet:text-[16px] text-[14px]">{subHeading}</p>
                    </div>

                    <div className="mb-[120px] mt-[100px] text-justify font-myVazirRegular desktop:text-[18px] tablet:text-[18px] text-[16px]">
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
