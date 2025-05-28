import tree from "../assets/icons/treeArticles.svg";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ArticleCard from "../components/ArticleCard";
import Footer from "../components/Footer";
import { ReactComponent as Arrow } from "../assets/icons/arrow-left-green.svg";
import svg1 from "../assets/images/backTree_big.svg";
import svg2 from "../assets/images/backTree_small.svg";
import ArticlesCategory from "../components/ArticlesCategory";


function ArticlesPage() {

    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen text-Gray-950 bg-Gray-50 overflow-hidden">

            <div className="hidden desktop:block">
                {/* Background SVGs */}
                <img
                    src={svg1}
                    alt="Background Left"
                    className="absolute left-0 top-[4%] z-0 pointer-events-none"
                />
                {/* <img
                src={svg2}
                alt="Background Right"
                className="absolute right-0 bottom-[20%] z-0 pointer-events-none"
            /> */}
            </div>

            {/* Content */}
            <div className="relative z-10">
                <Navbar />

                <div className="desktop:px-[96px] tablet:px-6 px-4">
                    <div className='flex flex-row justify-between mt-[120px]'>
                        <div>
                            <h4 className='font-myPeydaSemibold text-4xl text-Gray-950 mb-1'>مقالات سرو</h4>
                            <h5 className='font-myVazirRegular text-lg text-Gray-950'>به روزترین مقالات معتبر را اینجا بخوانید. </h5>
                        </div>
                        <img src={tree} alt="sarv" />
                    </div>

                    <ArticlesCategory />

                    <div className="grid grid-cols-1 desktop:grid-cols-2 gap-[32px] place-items-center mt-[100px]">
                        <ArticleCard title={"۵ راه ساده برای محافظت از سلامت روان"} subtitle={"با عاداتی کوچک و روزمره، حال دلتان را بهتر کنید."} className={"bg-primary-50 border-primary-100"} />
                        <ArticleCard title={"چگونه خواب بهتر داشته باشیم؟"} subtitle={"نکاتی کاربردی برای بهبود کیفیت خواب شما."} className={"bg-primary-50 border-primary-100"} />
                        <ArticleCard title={"تغذیه سالم در زندگی روزمره"} subtitle={"راهنمایی برای یک رژیم غذایی متعادل و سالم."} className={"bg-primary-50 border-primary-100"} />
                        <ArticleCard title={"مدیریت استرس در محیط کار"} subtitle={"راهکارهایی برای آرامش بیشتر در فضای کاری."} className={"bg-primary-50 border-primary-100"} />
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

export default ArticlesPage;
