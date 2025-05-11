import CustomButton from "./CustomeButton";
import {ReactComponent as User} from "../assets/icons/user.svg";
import down from "../assets/icons/chevron-down.svg"

export default function TopBar() {



  return (
    <div className="h-[72px] w-full flex items-center bg-primary-100 border-primary-200 border-b-[1px] px-4" >
      <div className="flex w-full items-center justify-between">
        <button className="flex items-center gap-2 mr-[340px] text-xl font-myVazirMedium text-primary-600">
          <User className="w-6 h-6"></User>
          نام کاربر
          <img src={down} alt="arrow" />
        </button>

        <CustomButton
          text={"خرید اشتراک پریمیوم"}
          className={
            "bg-primary-400 desktop:w-[159px] desktop:h-[44px] tablet:w-[159px] tablet:h-[44px] h-10 w-[140px] text-background-BG text-base font-myVazirSemibold"
          }
        />
      </div>
    </div>
  );
}
