import sarv from "../assets/icons/Sarv.svg";
import tree from "../assets/icons/treeArticles.svg"
import CustomButton from './CustomeButton';
import menu from "../assets/icons/menu.svg";
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Right } from "../assets/icons/chevron-right.svg";
import { ReactComponent as Down } from "../assets/icons/chevron-down.svg";
import useUserStore from '../store/UserStore';
import { useState } from "react";

function NavbarMobbinStyle() {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  const [profileOpen, setProfileOpen] = useState(false);

  const logout = () => {
    useUserStore.getState().clearUser();
    navigate('/');
  };

  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-[60%] bg-[#eeeeee] z-50 rounded-full mt-2">
      <div className="mx-auto px-6 sm:px-8 lg:px-4 h-16 flex items-center justify-between max-w-6xl">
        {/* Left: Logo & branding */}
        <button onClick={() => navigate('/')} className="flex items-center gap-2">
          <img src={tree} alt="سرو logo" className="h-8 w-auto pr-3" />
          <span className="font-myYekanMedium text-lg text-green-900">سرو</span>
        </button>

        {/* Center: nav links */}
        <ul className="hidden sm:flex items-center gap-8 text-base font-myYekanMedium text-gray-800">
          <li><button onClick={() => navigate('/')}>خانه</button></li>
          <li><button onClick={() => navigate('/Bot')}>سروبات</button></li>
          <li><button onClick={() => navigate('/tests')}>تست روانشناسی</button></li>
          <li><button onClick={() => navigate('/articles')}>مقالات</button></li>
        </ul>

        {/* Right: login/join or profile */}
        <div>
          {user ? (
            <div className="relative">
              <button onClick={() => setProfileOpen(!profileOpen)}
                className="text-primary-700 border border-primary-700 py-1 px-4 rounded-full text-sm">
                {user.username}
              </button>
              {profileOpen && (
                <ul className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-md py-2 w-48 text-right">
                  <li className="px-4 py-2 hover:bg-gray-100" onClick={() => { setProfileOpen(false); navigate('/profile'); }}>
                    حساب کاربری
                  </li>
                  <li className="border-t border-gray-200 mt-1"></li>
                  <li className="px-4 py-2 text-error-500 hover:bg-gray-100"
                      onClick={() => { setProfileOpen(false); logout(); }}>
                    خروج از حساب
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <button onClick={() => navigate('/login')}
              className="bg-primary-700 text-primary-50 py-3 px-4 rounded-full font-myYekanDemibold text-sm">
              ورود یا ثبت‌نام
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavbarMobbinStyle;
