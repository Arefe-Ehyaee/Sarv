import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileRouteSelect from "./ProfileRouteSelect";
import CustomButton from "./CustomeButton";
import useLogoutUser from "../services/Logout";

export default function ProfileSideNavbar({ closeSidebar }: { closeSidebar?: () => void }) {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(true);
  const logout = useLogoutUser();

  return (
    <div className={`fixed top-0 right-0 pb-[30px] z-30 bg-background-BG w-[300px] min-h-screen flex flex-col justify-between transition-all duration-300`}>
      {/* Routes or Icons */}
      <div className=" w-full ">
        <ProfileRouteSelect
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          closeSidebar={closeSidebar}
        />
      </div>

      <div className="flex justify-start desktop:px-[30px] tablet:px-[24px] mobile:px-[16px]">
        <CustomButton
          text={"خروج از حساب"}
          handleOnClick={logout}
          className="text-error-500 text-lg font-myVazirRegular"
        />
      </div>

    </div>
  );
}