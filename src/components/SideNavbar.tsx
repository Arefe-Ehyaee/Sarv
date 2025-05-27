import RouteSelect from "./RouteSelect";

import login from "../assets/icons/log-in.svg"
import sarv from "../assets/icons/tree.svg"
import CustomButton from "./CustomeButton";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Right } from "../assets/icons/chevron-right.svg";
export default function SideNavbar() {
  const navigate = useNavigate();
  return (
    <div className="fixed bg-primary-100 mt-[72px] w-[340px] min-h-screen flex flex-col justify-between px-[30px] py-[20px] border-l border-primary-200">
      <div className="flex flex-col">

        <button className="flex items-center justify-end">
          <Right className="w-6 h-6" />
        </button>
        <RouteSelect></RouteSelect>
      </div>

      <CustomButton
        text={"ورود"}
        iconsrc={login}
        className={
          "bg-primary-400 h-[44px] w-[94px] text-background-BG text-base font-myVazirSemibold"
        }
      />

    </div>
  );
}
