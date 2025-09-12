import tree from "../assets/icons/treeArticles.svg";
import menu from "../assets/icons/menu.svg";
import { useNavigate } from 'react-router-dom';
import useUserStore from '../store/UserStore';
import { useState } from "react";

function NavbarMobbinStyle() {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const logout = () => {
    useUserStore.getState().clearUser();
    navigate('/');
  };

  const navLinks = [
    { label: 'خانه', path: '/' },
    { label: 'سروبات', path: '/Bot' },
    { label: 'تست روانشناسی', path: '/tests' },
    { label: 'مقالات', path: '/articles' },
  ];

  return (
    <nav
      className="
    w-full
    lg:w-[60%] lg:mx-auto
    lg:bg-[#f3f2f2] border-b lg:border-none
    rounded-none lg:rounded-full 
    mt-0 lg:mt-2
  "
    >
      <div className="mx-auto px-6 sm:px-8 lg:px-4 h-16 flex items-center justify-between max-w-6xl">
        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <img src={menu} alt="menu" className="h-6 w-6" />
        </button>

        {/* Left: Logo & branding */}

        <button onClick={() => navigate('/')} className="flex items-center gap-2">
          <img src={tree} alt="سرو logo" className="h-8 w-auto pr-1" />
          <span className="font-myYekanMedium text-lg text-green-900">سرو</span>
        </button>

        {/* Center: nav links (desktop) */}
        <ul className="hidden lg:flex items-center gap-8 text-base font-myYekanMedium text-gray-800">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button onClick={() => navigate(link.path)}>{link.label}</button>
            </li>
          ))}
        </ul>

        {/* Right: login/join or profile */}
        <div className="flex items-center gap-4">

          {user ? (
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="text-primary-700 border border-primary-700 py-2 px-4 rounded-full text-sm"
              >
                {user.username}
              </button>
              {profileOpen && (
                <ul className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-md py-2 w-48 text-right z-50">
                  <li
                    className="px-4 py-2 hover:bg-gray-100"
                    onClick={() => { setProfileOpen(false); navigate('/profile'); }}
                  >
                    حساب کاربری
                  </li>
                  <li className="border-t border-gray-200 mt-1"></li>
                  <li
                    className="px-4 py-2 text-error-500 hover:bg-gray-100"
                    onClick={() => { setProfileOpen(false); logout(); }}
                  >
                    خروج از حساب
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className="bg-primary-700 text-primary-50 py-3 px-4 rounded-full font-myYekanDemibold text-sm"
            >
              ورود یا ثبت‌نام
            </button>
          )}
        </div>
      </div>

      {/* Mobile menu links */}
      {mobileMenuOpen && (
        <ul className="lg:hidden flex flex-col bg-[#f3f2f2] border-t border-gray-200 w-full text-right px-6 py-4 gap-3 z-40">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate(link.path);
                }}
                className="w-full text-right text-gray-800 py-2"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default NavbarMobbinStyle;
