import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import CommentCard from "./CommentCard";

function Comments() {
    const commentsData = [
        { date: "۱۹ فروردین ۱۴۰۴", text: "سخت‌ترین روزهای زندگی‌ام با حمایت مشاورم گذشت. متدهایی که آموزش دادند همیشه همراهمه.", bot: false },
        { date: "۱۹ فروردین ۱۴۰۴", text: "سروبات زندگی من را تغییر داد. وقتی که نیاز به گوش شنوا داشتم این هوش مصنوعی همراهم بود و کمکم کرد.", bot: true },
        { date: "۱۹ فروردین ۱۴۰۴", text: "سخت‌ترین روزهای زندگی‌ام با حمایت مشاورم گذشت. متدهایی که آموزش دادند همیشه همراهمه.", bot: false },
        { date: "۱۹ فروردین ۱۴۰۴", text: "سروبات زندگی من را تغییر داد. وقتی که نیاز به گوش شنوا داشتم این هوش مصنوعی همراهم بود و کمکم کرد.", bot: true },
        { date: "۱۹ فروردین ۱۴۰۴", text: "خیلی وقت بود دنبال تست روانشناسی مدنظرم میگشتم اما بالاخره اینجا پیداش کردم و تونستم رایگان امتحان کنم.خیلی وقت بود دنبال تست روانشناسی مدنظرم میگشتم اما بالاخره اینجا پیداش کردم و تونستم رایگان امتحان کنم.", bot: false },
    ];

    return (
        <div className="mt-[150px] desktop:px-[96px] tablet:px-6 px-4 text-gray-950">
            <h2 className='desktop:text-4xl tablet:text-3xl text-[28px] font-myPeydaSemibold  desktop:h-[54px] tablet:h-[48px] h-[42px]'>نظرات کاربران</h2>
            <h3 className='desktop:text-lg tablet:text-lg text-base font-myVazirRegular mt-1'>دیدگاه کاربران درباره خدمات متنوع سرو و سروبات</h3>

            <div className="mt-10">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView="auto"
                    spaceBetween={32}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    dir="rtl"
                    loop={true}
                    className="!px-0"
                >

                    {commentsData.map((comment, index) => (
                        <SwiperSlide key={index} style={{ width: '340px' }}>
                            <CommentCard {...comment} />
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Comments;