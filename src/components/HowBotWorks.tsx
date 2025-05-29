import FeatureCard from "./FeatureCard";
import tree from "../assets/icons/tree.svg"
import HowWorksCard from "./HowWorksCard";
import vector from "../assets/icons/Vector.svg";

function HowBotWorks() {
    return (

        <div className="mt-[150px] desktop:px-[96px] tablet:px-6 px-4 text-Gray-950">
            <h2 className='desktop:text-4xl tablet:text-3xl text-[28px] font-myPeydaSemibold  desktop:h-[54px] tablet:h-[48px] h-[42px]'>سروبات چطور کار میکند؟</h2>

            <div className="flex desktop:flex-row desktop:items-center desktop:justify-center flex-col">
                <img src={tree} alt="" className="desktop:hidden block w-[106px] h-[206px] mx-auto" />
 

                <img src={tree} alt="" className="hidden desktop:block w-[106px] h-[206px]" />
            </div>

            {/* cards */}

            <div className="flex flex-col desktop:flex-row gap-6 mt-8">
                <HowWorksCard
                    title="مکالمه با سروبات"
                    description="پس از ورود و یا ثبت نام در سرو، مراجع شروع به مکالمه با سروبات کرده و مسائل مد نظر خود را مطرح میکند."
                    icon={vector}
                />
                <HowWorksCard
                    title="ایجاد پرونده اولیه"
                    description="سروبات طبق موارد مطرح شده در مکالمه، آزمون پیشنهاد میدهد. پس از تکمیل آزمون توسط مراجع، پرونده اولیه تشکیل میشود."
                    icon={vector}
                />
                <HowWorksCard
                    title="ادامه روند درمان"
                    description="مراجع بر حسب نیاز خود، روند درمان را با سروبات ادامه میدهد و از سایر خدمات سرو نیز استفاده  میکند."
                    icon={vector}
                />
            </div>
        </div>
    );
}

export default HowBotWorks;
