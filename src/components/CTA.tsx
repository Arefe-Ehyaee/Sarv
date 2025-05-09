import cta from "../assets/images/call to action section.svg";
import CustomButton from "./CustomeButton";

function CTA() {
    return (
        <div className="relative w-full mt-[100px]">
            <img src={cta} alt="cta" className="w-full object-cover h-[269px]" />
            
            <h5 className="absolute top-5 w-full text-center text-gray-950 font-myPeydaSemibold  desktop:text-4xl tablet:text-x[32px] text-[28px] mt-5">
                آماده‌ای شروع کنیم؟ پس بزن بریم!
            </h5>

            <div className="absolute desktop:top-[106px] tablet:top[100px] top-[136px] w-full flex justify-center gap-10 space-x-4 text-gray-950 font-myVazirSemibold text-sm">
                <CustomButton
                    text={"ورود به سرو"}
                    className={"bg-primary-400 text-white w-24 h-10"}
                />
                <CustomButton
                    text={"تست روانشناسی رایگان"}
                    className={"w-[164px] h-[41px] bg-white border-2 border-primary-600"}
                />
            </div>
        </div>
    );
}

export default CTA;
