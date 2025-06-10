import { useNavigate } from "react-router-dom";
import cta from "../assets/images/call to action section.svg";
import CustomButton from "./CustomeButton";

function CTA() {
     const navigate = useNavigate();
    return (
        <div className="relative w-full mt-[100px]">
            <img src={cta} alt="cta" className="w-full object-cover h-[269px]" />
            
            <h5 className="absolute top-5 w-full text-center text-Gray-950 font-myPeydaSemibold  desktop:text-4xl tablet:text-[32px] text-[28px] mt-5">
                آماده‌ای شروع کنیم؟ پس بزن بریم!
            </h5>

            <div className="absolute desktop:top-[106px] tablet:top-[100px] top-[136px] w-full flex justify-center gap-10 space-x-4 text-Gray-950 font-myVazirSemibold text-sm">
      <CustomButton
        handleOnClick={() => navigate('/login')}
        text={'ورود یا ثبت نام'}
        className={'text-primary-50 bg-primary-700 h-[44px] px-[18px] py-[10px]'}
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
