import CustomButton from "./CustomeButton";
import { ReactComponent as User } from "../assets/icons/user.svg";
import { ReactComponent as Down } from "../assets/icons/chevron-down.svg";
import menu from "../assets/icons/menu.svg";
import sarv from "../assets/icons/tree.svg"
import { useNavigate } from "react-router-dom";

export default function ProfileTopBar() {
  const navigate = useNavigate();
  return (
    <div className="h-[72px] w-full flex items-center bg-primary-100 border-primary-200 border-b-[1px] px-4 z-10 fixed top-0 left-0 right-0">
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-row items-center">
          <button className='block tablet:hidden'>
            <img src={menu} alt="menu" />
          </button>

          <button className="flex items-center gap-2 text-xl font-myVazirMedium text-primary-600 desktop:mr-[340px] tablet:mr-[340px] mr-2">
            <User className="w-6 h-6" />
            <p className="desktop:block tablet:block hidden">نام کاربر</p>
          </button>
        </div>
      </div>
    </div>
  );
}
