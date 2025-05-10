import RouteSelect from "./RouteSelect";

import login from "../assets/icons/log-in.svg"
import sarv from "../assets/icons/tree.svg"
import CustomButton from "./CustomeButton";

export default function SideNavbar() {
  return (
    <div className="bg-primary-100 w-[340px] min-h-screen fixed top-0 flex flex-col justify-between px-[30px] py-[26px] border-l border-primary-200">
      <div className="flex flex-col">


          <span className="flex flex-row text-primary-600 font-myPeydaRegular text-[30px] mb-16">
                        <img src={sarv} alt="" className="w-[35px] h-[46px]" />

            سرو بات
          </span>

        <RouteSelect></RouteSelect>
      </div>



        <CustomButton
          text={"ورود"}
          iconsrc ={login}
          className={
            "bg-primary-400 h-[44px] w-[94px] text-background-BG text-base font-myVazirSemibold"
          }
        />

    </div>
  );
}
