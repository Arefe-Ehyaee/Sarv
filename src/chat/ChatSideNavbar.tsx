import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomeButton";
import login from "../assets/icons/log-in.svg";
import sarv from "../assets/icons/tree.svg";
import LogoutButton from "../components/LogOutButton";
import useUserStore from "../store/UserStore";
import ChatRouteSelect from "./ChatRouteSelect";
import { ReactComponent as XIcon } from "../assets/icons/x-circle.svg"; 

type ChatSideNavbarProps = {
  mobileNavOpen?: boolean;
  setMobileNavOpen?: (value: boolean) => void;
};

export default function AISideNavbar({ 
  mobileNavOpen, 
  setMobileNavOpen 
}: ChatSideNavbarProps) {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);

  const handleNavigation = (path: string) => {
    navigate(path);
    if (setMobileNavOpen) {
      setMobileNavOpen(false);
    }
  };

  return (
    <div
      className="fixed top-0 right-0 z-10 bg-[#FFFFFF] w-[320px] min-h-screen flex flex-col justify-between px-[20px] py-[20px] border-l border-primary-200 transition-all duration-300"
    >
      <div className="flex flex-col">
        {/* Header: Logo + Close button */}
        <div className="flex items-center justify-between mb-4">
          <button 
            onClick={() => handleNavigation('/')} 
            className="flex flex-row items-center text-primary-600 font-myPeydaRegular text-[30px]"
          >
            <img src={sarv} alt="sarv" className="w-[35px] h-[46px]" />
            <span className="ml-2">سرو بات</span>
          </button>

          {/* Close button only visible on mobile */}
          {setMobileNavOpen && (
            <button 
              onClick={() => setMobileNavOpen(false)} 
              className="tablet:hidden text-primary-600"
            >
              <XIcon className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Routes */}
        <div className="mt-6 w-full">
          <ChatRouteSelect />
        </div>
      </div>

      {/* Bottom buttons */}
      {/* {user ? (
        <LogoutButton />
      ) : (
        <CustomButton
          text="ورود"
          iconsrc={login}
          handleOnClick={() => handleNavigation("/login")}
          className="bg-primary-400 h-[44px] w-[94px] text-background-BG text-base font-myVazirSemibold flex justify-center items-center"
        />
      )}  */}
    </div>
  );
}
