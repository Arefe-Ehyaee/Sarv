import menu from "../assets/icons/menu.svg";
import { useNavigate } from "react-router-dom";
import useUserStore from "../store/UserStore";
import { User } from "lucide-react";
import { ReactComponent as Down } from "../assets/icons/chevron-down.svg";
import { useState } from "react";
import CustomButton from "../components/CustomeButton";
import LoginModal from "../components/LoginModal";

interface ChatTopBarProps {
  mobileNavOpen?: boolean;
  setMobileNavOpen?: (open: boolean) => void;
}

export default function ChatTopBar({ mobileNavOpen, setMobileNavOpen }: ChatTopBarProps) {
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();
  const [profiledropdownOpen, setProfileDropdownOpen] = useState(false);
  const toggleProfileDropdown = () => setProfileDropdownOpen((prev) => !prev);
  const [showLogin, setShowLogin] = useState(false);
  
  const logout = () => {
    useUserStore.getState().clearUser();
    navigate('/');
  };

  const handleMenuClick = () => {
    if (setMobileNavOpen) {
      setMobileNavOpen(!mobileNavOpen);
    }
  };

  return (
    <div className="h-[72px] w-full flex items-center bg-[#ECFAE5] border-primary-300 border-b-[1px] px-4">
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-row items-center">
          <button 
            className='block tablet:hidden'
            onClick={handleMenuClick}
          >
            <img src={menu} alt="menu" />
          </button>
        </div>

        {user ? (
          <div>
            <button onClick={toggleProfileDropdown} className="text-primary-700 border-[0.6px] hover:bg-primary-50 focus:bg-primary-800 focus:text-white border-primary-700 h-[44px] px-[18px] py-[10px] rounded-full">
              {user.username}
            </button>
            {profiledropdownOpen && (
              <ul className="absolute top-full text-center transform translate-x-[34%] mt-2 text-lg font-myVazirRegular bg-white border border-gray-200 rounded-lg shadow-lg py-2 w-max z-50">
                <li className="px-4 py-2 whitespace-nowrap hover:bg-gray-100 cursor-pointer" onClick={() => { setProfileDropdownOpen(false); navigate('/profile'); }}>
                  حساب کاربری
                </li>
                <hr className='mx-[27px] text-Gray-400'></hr>
                <li
                  className="px-4 py-2 text-error-500 whitespace-nowrap hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setProfileDropdownOpen(false);
                    logout();
                  }}
                >
                  خروج از حساب
                </li>
              </ul>
            )}
          </div>
        ) : (
          <>
            <CustomButton
              handleOnClick={() => setShowLogin(true)}
              text={'ورود یا ثبت نام'}
              className={'text-primary-50 bg-primary-700 hover:bg-primary-500 focus:bg-primary-900 h-[44px] px-[18px] py-[10px]'}
            />
            <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
          </>
        )}
      </div>
    </div>
  );
}