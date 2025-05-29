import { ReactComponent as UserIcon } from "../assets/icons/user.svg";
import { useNavigate } from "react-router-dom";
import useUserStore from "../store/UserStore";

export default function ProfileTopBar() {
  const { user } = useUserStore();
  const navigate = useNavigate();

  return (
    <div className="h-[72px] w-full flex items-center bg-primary-100 border-b px-4 fixed top-0 z-10">
      <div className="flex items-center justify-between w-full">
        <button className="flex items-center gap-2 text-lg font-bold text-primary-600">
          <UserIcon className="w-6 h-6" />
          <span>{user?.email ?? "نام کاربر"}</span>
        </button>
      </div>
    </div>
  );
}
