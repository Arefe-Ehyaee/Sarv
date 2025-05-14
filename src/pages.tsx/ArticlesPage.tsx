import tree from "../assets/icons/treeArticles.svg"
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ArticleCard from "../components/ArticleCard";
import Footer from "../components/Footer";
import arrow from "../assets/icons/arrow-left-green.svg";
import { ReactComponent as Arrow } from "../assets/icons/arrow-left-green.svg";
function ArticlesPage() {

    const navigate = useNavigate();
    return (
        <div className="min-h-screen text-gray-950 bg-gray-50">
            <Navbar />

            <div className="desktop:px-[96px] tablet:px-6 px-4">

                <div className='flex flex-row justify-between mt-[120px]'>
                    <div>
                        <h4 className='font-myPeydaSemibold text-4xl text-gray-950 mb-1'>مقالات سرو</h4>
                        <h5 className='font-myVazirRegular text-lg text-gray-950'>به روزترین مقالات معتبر را اینجا بخوانید. </h5>
                    </div>
                    <img src={tree} alt="sarv" />

                </div>
                <div className="h-[70px] bg-primary-800 rounded-[20px] mb-[100px]">

                </div>

                <div className="grid grid-cols-1 desktop:grid-cols-2 gap-[32px] place-items-center">
                    <ArticleCard title={"۵ راه ساده برای محافظت از سلامت روان"} subtitle={"با عاداتی کوچک و روزمره، حال دلتان را بهتر کنید."} bgColor={"bg-primary-100"} />
                    <ArticleCard title={"چگونه خواب بهتر داشته باشیم؟"} subtitle={"نکاتی کاربردی برای بهبود کیفیت خواب شما."} bgColor={"bg-primary-100"} />
                    <ArticleCard title={"تغذیه سالم در زندگی روزمره"} subtitle={"راهنمایی برای یک رژیم غذایی متعادل و سالم."} bgColor={"bg-primary-100"} />
                    <ArticleCard title={"مدیریت استرس در محیط کار"} subtitle={"راهکارهایی برای آرامش بیشتر در فضای کاری."} bgColor={"bg-primary-100"} />
                </div>
            </div>

            <div className="relative h-[269px] bg-primary-800 mt-[120px] flex flex-col items-center justify-center text-center">
                <h5 className="text-primary-200 font-myPeydaSemibold desktop:text-[32px] tablet:text-[32px] text-[22px]">
                    خود آگاهی از این مسیر شروع میشه
                </h5>

                <button className="mt-5">
                    <div className="flex items-center gap-2 text-primary-300 font-myVazirRegular text-lg">
                        درباره‌ی خدمات ما بیشتر بدانید
                        <Arrow></Arrow>
                    </div>
                </button>
            </div>


            <Footer></Footer>

        </div>
    )
}

export default ArticlesPage;
