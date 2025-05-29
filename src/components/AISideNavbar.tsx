import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AIRouteSelect from "./AIRouteSelect";
import CustomButton from "./CustomeButton";
import login from "../assets/icons/log-in.svg";
import sarv from "../assets/icons/tree.svg";
import { ReactComponent as Right } from "../assets/icons/chevron-right.svg";
import { ReactComponent as Left } from "../assets/icons/chevron-left.svg";
import LogoutButton from "./LogOutButton";
import useUserStore from "../store/UserStore";

export default function AISideNavbar() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const user = useUserStore((state) => state.user);

  return (
    <div
      className={`fixed top-0 right-0 z-10 bg-primary-100 ${
        collapsed ? "w-[80px]" : "w-[340px]"
      } min-h-screen flex flex-col justify-between px-[20px] py-[20px] border-l border-primary-200 transition-all duration-300`}
    >
      <div className="flex flex-col items-end">
        <button onClick={() => navigate('/')} className="desktop:flex tablet:flex hidden self-start mb-4">
          <span className="flex flex-row items-center text-primary-600 font-myPeydaRegular text-[30px]">
            <img src={sarv} alt="sarv" className="w-[35px] h-[46px]" />
            {!collapsed && <span className="ml-2">سرو بات</span>}
          </span>
        </button>

        <button onClick={() => setCollapsed(!collapsed)} className="mt-[20px] text-primary-600">
          {collapsed ? <Left className="w-4 h-4 pl-2" /> : <Right className="w-6 h-6" />}
        </button>

        <div className="mt-6 w-full">
          <AIRouteSelect collapsed={collapsed} />
        </div>
      </div>

      {/* Show logout if user exists, otherwise show login */}
      {user ? (
        <LogoutButton collapsed={collapsed} />
      ) : (
        <CustomButton
          text={collapsed ? "" : "ورود"}
          iconsrc={login}
          handleOnClick={() => navigate("/login")}
          className={`bg-primary-400 h-[44px] ${
            collapsed ? "w-[44px]" : "w-[94px]"
          } text-background-BG text-base font-myVazirSemibold flex justify-center items-center`}
        />
      )}
    </div>
  );
}
