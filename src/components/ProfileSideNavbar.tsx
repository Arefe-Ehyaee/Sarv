import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileRouteSelect from "./ProfileRouteSelect";
import CustomButton from "./CustomeButton";
import login from "../assets/icons/log-in.svg";
import sarv from "../assets/icons/tree.svg";
import { ReactComponent as Right } from "../assets/icons/chevron-right.svg";
import { ReactComponent as Left } from "../assets/icons/chevron-left.svg"; // Optional for expanding again

export default function ProfileSideNavbar() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`fixed top-0 right-0 z-10 bg-primary-100 w-[340px] min-h-screen flex flex-col justify-between px-[20px] py-[20px] border-l border-primary-200 transition-all duration-300`}>

      <div className="flex flex-col items-end">
        {/* Logo & title */}
        {/* Logo: Show icon always, text only if not collapsed */}
        <button
          onClick={() => navigate('/')}
          className="desktop:flex tablet:flex hidden self-start mb-4"
        >
          <span className="flex flex-row items-center text-primary-600 font-myPeydaRegular text-[30px]">
            <img src={sarv} alt="" className="w-[35px] h-[46px]" />
            <span className="ml-2">سرو </span>
          </span>
        </button>


        {/* Routes or Icons */}
        <div className="mt-6 w-full">
          <ProfileRouteSelect collapsed={collapsed} />
        </div>
      </div>

      {/* Login button - hide text when collapsed */}
      <CustomButton
        text={"خروج از حساب"}
        className={`bg-primary-400 h-[44px] w-[144px] text-background-BG text-base font-myVazirSemibold flex justify-center items-center`}
      />
    </div>
  );
}
