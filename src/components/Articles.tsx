import ArticleCard from "./ArticleCard";
import arrow from "../assets/icons/arrow-left-green.svg";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Arrow } from "../assets/icons/arrow-left-green.svg";
function Articles() {
    const navigate = useNavigate();
    return (
        <div className="mt-[150px] desktop:px-[96px] tablet:px-6 xs:px-4 text-gray-950">
            <div className="mb-10 flex flex-col items-start justify-between">

                <div className="w-full flex flex-row items-center justify-between">
                    <h2 className='desktop:text-4xl tablet:text-3xl text-[28px] font-myPeydaSemibold  desktop:h-[54px] tablet:h-[48px] h-[42px]'>
                        مقالات
                    </h2>
                    <button className="flex flex-row items-center gap-[10px] text-primary-400" onClick={() => navigate('/articles')}>
                        <p className="whitespace-nowrap font-myVazirMedium desktop:text-xl tablet:text-xl text-base">
                            مشاهده همه مقالات
                        </p>
                        <Arrow></Arrow>
                    </button>
                </div>

                <h3 className='desktop:text-lg tablet:text-lg text-base font-myVazirRegular mt-1'>
                    با مقالات به روز و معتبر سرو، از خود مراقبت کنید.
                </h3>
            </div>


            <div className="grid grid-cols-1 desktop:grid-cols-2 gap-[32px] place-items-center">
              <ArticleCard title={"۵ راه ساده برای محافظت از سلامت روان"} subtitle={"با عاداتی کوچک و روزمره، حال دلتان را بهتر کنید."} className={"bg-primary-50 border-primary-100"} />
                        <ArticleCard title={"چگونه خواب بهتر داشته باشیم؟"} subtitle={"نکاتی کاربردی برای بهبود کیفیت خواب شما."} className={"bg-primary-50 border-primary-100"} />
                        <ArticleCard title={"تغذیه سالم در زندگی روزمره"} subtitle={"راهنمایی برای یک رژیم غذایی متعادل و سالم."} className={"bg-primary-50 border-primary-100"} />
                        <ArticleCard title={"مدیریت استرس در محیط کار"} subtitle={"راهکارهایی برای آرامش بیشتر در فضای کاری."} className={"bg-primary-50 border-primary-100"} />
            </div>
        </div>
    );
}

export default Articles;
