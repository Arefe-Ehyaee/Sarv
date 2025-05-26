import FeatureCard from "./FeatureCard";
import ServiceCard from "./ServiceCard";
import {ReactComponent as Love} from "../assets/icons/heart.svg";
import {ReactComponent as User} from "../assets/icons/user.svg";
import users from "../assets/icons/users.svg";
import send from "../assets/icons/send.svg"

function Services() {
    return (

        <div className="mt-[150px] desktop:px-[96px] tablet:px-6 px-4 text-Gray-950">
            <h2 className='desktop:text-4xl tablet:text-3xl text-[28px] font-myPeydaSemibold  desktop:h-[54px] tablet:h-[48px] h-[42px]'>خدمات درمانگران سرو</h2>
            <h3 className='desktop:text-lg tablet:text-lg text-base font-myVazirRegular mt-1'>ارائه خدمات شخصی‌سازی شده‌ی سلامت روان برای هر نیاز توسط درمانگران با تجربه</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 desktop:grid-cols-6 gap-6 mt-8">
                {/* First row: 3 cards, each span 2 columns */}
                <div className="desktop:col-span-2 tablet:col-span-3">
                    <ServiceCard title="مشاوره زوجین و خانواده" description="تقویت روابط و حل تعارضات با راهنمایی متخصصان" icon={<Love className="text-primary-50" />} />
                </div>
                <div className="desktop:col-span-2 tablet:col-span-3">
                    <ServiceCard title="مشاوره فردی" description="جلسات خصوصی برای رسیدگی به چالش‌های شخصی شما" icon={<User className="text-primary-50" />} />
                </div>
                <div className="desktop:col-span-2 tablet:col-span-3">
                    <ServiceCard title="مشاوره کودک و نوجوانان" description="همراهی در مسیر تحصیلی و پرورشی فرزندان شما" icon={send} />
                </div>

                {/* Second row: 2 cards, each span 3 columns */}
                <div className="desktop:col-span-3 tablet:col-span-3">
                    <ServiceCard title="برگزاری ورکشاپ‌ها در شرکت‌ها" description="ارائه و برگزاری جلسات و ورکشاپ‌ها در شرکت‌ها برای بهبود سلامت روانی در کار" icon={users} />
                </div>
                <div className="desktop:col-span-3 tablet:col-span-3">
                    <ServiceCard title="کارگاه‌های گروهی آنلاین" description="شرکت در جلسات گروهی درباره موضوعات مختلف سلامت روان" icon={users} />
                </div>
            </div>



        </div>
    )
}

export default Services;
