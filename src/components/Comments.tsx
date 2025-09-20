import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import CommentCard from "./CommentCard";

function Comments() {
const commentsData = [
  { 
    date: "۱۰ شهریور ۱۴۰۴", 
    text: "سرو باعث شد راحت‌تر درباره مشکلاتم حرف بزنم، بدون اینکه حس قضاوت شدن داشته باشم.", 
    bot: false 
  },
  { 
    date: "۱۵ تیر ۱۴۰۴", 
    text: "سروبات همیشه در دسترسه. حتی نصف شب هم وقتی استرس داشتم، تونست آرومم کنه.", 
    bot: true 
  },
  { 
    date: "۲۰ شهریور ۱۴۰۴", 
    text: "آزمون BDI رو اینجا زدم و تونستم بفهمم شرایط روحیم چطوره. خیلی کاربردیه.", 
    bot: false 
  },
  { 
    date: "۲۵ مرداد ۱۴۰۴", 
    text: "برای اولین بار جایی دیدم که تست‌ها رو رایگان ارائه می‌ده. حس کردم واقعاً به فکر کاربره.", 
    bot: false 
  },
  { 
    date: "۳۰ مرداد ۱۴۰۴", 
    text: "خیلی برام مهم بود که اطلاعاتم محرمانه بمونه. سرو این اعتماد رو ایجاد کرده.", 
    bot: false 
  },
  { 
    date: "۵ شهریور ۱۴۰۴", 
    text: "سروبات بهم تمرین‌های ساده‌ای برای مدیریت اضطراب داد. تاثیرش رو همون روز حس کردم.", 
    bot: true 
  },
  { 
    date: "۱۲ خرداد ۱۴۰۴", 
    text: "خوشحالم که می‌تونم قبل مراجعه به روانشناس، شرح حال و پرونده کامل داشته باشم.", 
    bot: false 
  },
  { 
    date: "۱۸ تیر ۱۴۰۴", 
    text: "سرعت و سادگی استفاده عالیه. بدون نیاز به فیلترشکن تونستم استفاده کنم.", 
    bot: false 
  }
];

    return (
        <div className="mt-[150px] desktop:px-[96px] tablet:px-6 px-4 text-Gray-950">
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