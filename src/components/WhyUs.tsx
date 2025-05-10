import FeatureCard from "./FeatureCard";

function WhyUs() {
    return (

        <div className="mt-[100px] desktop:px-[96px] tablet:px-6 px-4 text-gray-950">
            <h2 className='desktop:text-4xl tablet:text-3xl text-[28px] font-myPeydaSemibold desktop:h-[54px] tablet:h-[48px] h-[42px]'>چرا سرو را انتخاب کنید؟</h2>
            <h3 className='desktop:text-lg tablet:text-lg text-base font-myVazirRegular mt-1'>ویژگی‌های متمایز‌کننده سرو </h3>

            {/* cards */}

            <div className="flex flex-col desktop:flex-row gap-6 mt-8">
                <FeatureCard
                    title="درمانگران باسابقه"
                    description="مراقبت شخصی‌سازی شده با دسترسی به درمانگران حرفه‌ای"
                //   icon={<SupportIcon />}
                />
                <FeatureCard
                    title="سروبات"
                    description="تراپیست هوشمند با دسترس‌پذیری ۲۴ ساعته"
                //   icon={<SecurityIcon />}
                />
                <FeatureCard
                    title="تست‌های روانشناسی"
                    description="دسترسی رایگان به معتبرترین تست‌ها"
                //   icon={<PriceIcon />}
                />
            </div>
        </div>
    )
}

export default WhyUs;
