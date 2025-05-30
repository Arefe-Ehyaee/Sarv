import CustomButton from "./CustomeButton";
import { ReactComponent as User } from "../assets/icons/user.svg";
import { ReactComponent as Down } from "../assets/icons/chevron-down.svg";
import menu from "../assets/icons/menu.svg";
import sarv from "../assets/icons/tree.svg"
import { useNavigate } from "react-router-dom";

export default function AITopBar() {
  const navigate = useNavigate();
  return (
    <div className="h-[72px] w-full flex items-center bg-primary-200 border-primary-300 border-b-[1px] px-4" >
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-row items-center">


          <button className='block tablet:hidden'>
            <img src={menu} alt="menu" />
          </button>

          {/* <button className="flex items-center gap-2 text-xl font-myVazirMedium text-primary-600 desktop:mr-[340px] tablet:mr-[340px] mr-2"> */}
                      {/* <button className="flex items-center gap-2 text-xl font-myVazirMedium text-primary-600 desktop:mr-[40px] tablet:mr-[40px] mr-2">

            <User className="w-6 h-6"></User>
            <p className="desktop:block tablet:block hidden">نام کاربر</p>
            <Down className="w-6 h-6 text-primary-600" />
          </button> */}
        </div>

        {/* <CustomButton
          text={"خرید اشتراک پریمیوم"}
          className={
            "bg-primary-400 desktop:h-[44px]  tablet:h-[44px] h-10 px-[18px] text-background-BG text-base font-myVazirSemibold"
          }
        /> */}
      </div>
    </div>
  );
}
