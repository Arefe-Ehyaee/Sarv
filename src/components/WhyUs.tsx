// WhyUs.jsx
import FeatureCard from "./FeatureCard";

function WhyUs() {
    return (
        <div className="mt-[100px] desktop:px-[96px] tablet:px-6 px-4 text-Gray-950">
            <h2 className='desktop:text-4xl tablet:text-3xl text-[28px] font-myPeydaSemibold desktop:h-[54px] tablet:h-[48px] h-[42px]'>چرا سرو را انتخاب کنید؟</h2>
            <h3 className='desktop:text-lg tablet:text-lg text-base font-myVazirRegular mt-1'>ویژگی‌های متمایز‌کننده سرو </h3>

            {/* cards */}
            {/* First row */}
            <div className="flex flex-col tablet:flex-row desktop:flex-row gap-6 mt-8 items-center justify-center">
                <FeatureCard
                    title="شخصی سازی شده"
                    description="ارائه روشهای درمانی شخصی"
                />
                <div className="hidden tablet:block">
                    <FeatureCard
                        title="خدمات شبانه روزی"
                        description="ارائه خدمات ۲۴ ساعته هر روز هفته"
                    />
                </div>
                <div className="hidden desktop:block">
                    <FeatureCard
                        title="مقرون به صرفه"
                        description="ارائه خدمات کم هزینه و یا رایگان"
                    />
                </div>
            </div>
            
            {/* Second row */}
            <div className="flex flex-col tablet:flex-row desktop:flex-row gap-6 mt-6 items-center justify-center">
                <div className="tablet:hidden">
                    <FeatureCard
                        title="خدمات شبانه روزی"
                        description="ارائه خدمات ۲۴ ساعته هر روز هفته"
                    />
                </div>
                <FeatureCard
                    title="تاریخچه روند درمان"
                    description="دسترسی به پرونده شخصی و روند پیشرفت"
                />
                <FeatureCard
                    title="شبیه سازی اتاق درمان"
                    description="عدم برچسب زنی و ارائه راهکار شتابزده"
                />
            </div>
            
            {/* Third row - mobile only */}
            <div className="flex flex-col gap-6 mt-6 items-center justify-center tablet:hidden">
                <FeatureCard
                    title="مقرون به صرفه"
                    description="ارائه خدمات کم هزینه و یا رایگان"
                />
            </div>
            
            {/* Third row - tablet only */}
            <div className="hidden tablet:flex desktop:hidden gap-6 mt-6 justify-center">
                <FeatureCard
                    title="مقرون به صرفه"
                    description="ارائه خدمات کم هزینه و یا رایگان"
                />
            </div>
        </div>
    )
}

export default WhyUs;
