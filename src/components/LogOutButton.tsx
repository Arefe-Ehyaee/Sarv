// components/LogoutButton.tsx
import { useNavigate } from "react-router-dom";
import useUserStore from "../store/UserStore";
import CustomButton from "./CustomeButton";

type Props = {
  collapsed?: boolean;
};

export default function LogoutButton({ collapsed = false }: Props) {
  const navigate = useNavigate();
  const clearUser = useUserStore((state) => state.clearUser);

  const handleLogout = () => {
    clearUser();
    navigate("/login");
  };

  return (
    <CustomButton
      text={collapsed ? "" : "خروج"}
      handleOnClick={handleLogout}
      className={`bg-red-500 h-[44px] ${
        collapsed ? "w-[44px]" : "w-[94px]"
      } text-background-BG text-base font-myVazirSemibold flex justify-center items-center`}
    />
  );
}
