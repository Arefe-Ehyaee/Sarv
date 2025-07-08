import { ReactComponent as UserIcon } from "../assets/icons/user.svg";
import { useNavigate } from "react-router-dom";
import useUserStore from "../store/UserStore";
import sarv from "../assets/icons/tree.svg";
import menu from "../assets/icons/menu.svg";

interface Props {
  toggleSidebar: () => void;
}

export default function ProfileTopBar({ toggleSidebar }: Props) {
  const { user } = useUserStore();
  const navigate = useNavigate();

  return (
    <div className="h-[72px] w-full flex items-center bg-primary-200 border-b px-4 fixed top-0 z-10">
      <div className="flex items-center justify-right tablet:gap-[242px] desktop:gap-[242px] w-full">
        <button onClick={() => navigate('/')} className="desktop:flex hidden self-start">
          <span className="flex flex-row items-center text-primary-600 font-myPeydaRegular text-[30px]">
            <img src={sarv} alt="" className="w-[35px] h-[46px]" />
            <span className="ml-2">سرو</span>
          </span>
        </button>

        <div className="flex flex-row items-center gap-[13px]">
          {/* ☰ Button to toggle sidebar */}
          <button className='block desktop:hidden' onClick={toggleSidebar}>
            <img src={menu} alt="menu" />
          </button>

          <button className="flex items-center gap-2 text-lg font-bold text-primary-600">
            <UserIcon className="w-6 h-6" />
            <span>{user?.email ?? "نام کاربر"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
