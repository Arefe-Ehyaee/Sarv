import FeatureCard from "./FeatureCard";
import tree from "../assets/icons/tree.svg"
import HowWorksCard from "./HowWorksCard";
import vector from "../assets/icons/Vector.svg";

function HowBotWorks() {
    return (

        <div className="mt-[150px] desktop:px-[96px] tablet:px-6 px-4 text-gray-950">
            <h2 className='desktop:text-4xl tablet:text-3xl text-[28px] font-myPeydaSemibold  desktop:h-[54px] tablet:h-[48px] h-[42px]'>سروبات چطور کار میکند؟</h2>

            <div className="flex desktop:flex-row desktop:items-center desktop:justify-between flex-col">
                <img src={tree} alt="" className="desktop:hidden block w-[106px] h-[206px] mx-auto" />
                <h3 className='desktop:text-lg tablet:text-lg text-base font-myVazirRegular desktop:max-w-[1056px] desktop:h-[108px] text-justify'>سروبات، تراپیست هوشمند سرو هست که ۲۴ ساعته هر روز هفته در دسترس تمام سنین افراد هست. سروبات یک گوش شنواست برای وقت‌هایی که نیاز دارید که یکی به حرفاتون گوش بده.
                    <p>حالا در کنار گوش شنوا بودنش، میتونه توصیه‌های اصولی و معتبر براتون فراهم کنه.
                    </p>
                    <p>همچنین یک سری ویژگی‌های جذاب سروبات اونو از بقیه متمایز میکنه:</p>
                </h3>



                <img src={tree} alt="" className="hidden desktop:block w-[106px] h-[206px]" />
            </div>

            {/* cards */}

            <div className="flex flex-col desktop:flex-row gap-6 mt-8">
                <HowWorksCard
                    title="موسیقی آرامش بخش"
                    description="پخش موسیقی برای هر حال شما که در زمان کار و درس و رانندگی و ... همراه شماست."
                    icon={vector}
                />
                <HowWorksCard
                    title="کارت انگیزه روزانه"
                    description="هر روز برای حفظ انگیزه خود، کارت ویژه‌ای دریافت میکنید. "
                    icon={vector}
                />
                <HowWorksCard
                    title="تمرین و بازی"
                    description="بازی و پازل و تمرینهایی برای کمک به خود آگاهی و بهبود حال روحی"
                    icon={vector}
                />
            </div>
        </div>
    );
}

export default HowBotWorks;
