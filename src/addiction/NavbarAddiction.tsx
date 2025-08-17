
import menu from "../assets/icons/menu.svg";
// import { ReactComponent as Right } from "../assets/icons/chevron-right.svg";
// import { ReactComponent as UserIcon } from "../assets/icons/user.svg";
// import { ReactComponent as SettingsIcon } from "../assets/icons/settings.svg";
// import { ReactComponent as InfoIcon } from "../assets/icons/info.svg";
// import { ReactComponent as HelpIcon } from "../assets/icons/help-circle.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useUserStore from "../store/UserStore";
import CustomButton from "../components/CustomeButton";
import joyModern from "./joy-modern.svg";

function NavbarAddiction() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const user = useUserStore((state) => state.user);

  const logout = () => {
    useUserStore.getState().clearUser();
    navigate("/");
  };

  return (
    <nav className="relative w-full h-[50px] flex items-center justify-between shadow-sm  border-gray-200 px-4 md:px-12 z-50">
      {/* Left side (Logo + Hamburger) */}
      <div className="flex items-center gap-3">
        <button className="block md:hidden" onClick={() => setMenuOpen(true)}>
          <img src={menu} alt="menu" className="w-6 h-6" />
        </button>
        <button onClick={() => navigate("/")}>
          <img src={joyModern} alt="logo" className="w-8 h-8" />
        </button>
      </div>

      {/* Right side (Desktop only) */}
      <div className="hidden md:flex items-center gap-4">
        {user ? (
          <div className="relative">
            <button
              onClick={() => setProfileDropdownOpen((prev) => !prev)}
              className="text-teal-700 border border-teal-700 px-2 py-1 text-sm rounded-full hover:bg-teal-50"
            >
              {user.username}
            </button>
            {profileDropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 font-myYekanRegular bg-white border border-gray-200 rounded-lg shadow-lg py-2 w-max z-50">
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setProfileDropdownOpen(false);
                    navigate("/profile");
                  }}
                >
                  حساب کاربری
                </li>
                <hr className="mx-4" />
                <li
                  className="px-4 py-2 text-red-500 hover:bg-gray-100 cursor-pointer"
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
          <CustomButton
            handleOnClick={() => navigate("/login")}
            text="ورود یا ثبت نام"
            className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700"
          />
        )}
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"
          } flex flex-col`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <img src={joyModern} alt="sarv" className="h-8" />
          <button onClick={() => setMenuOpen(false)}>
            {/* <Right className="w-6 h-6 text-gray-700" /> */}
          </button>
        </div>

        {/* User Info */}
        {user && (
          <div className="px-6 py-4 border-b flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold text-lg">
              {user.username.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="font-semibold text-gray-900">{user.username}</p>
              {/* <p className="text-sm text-gray-500">{user.email || "کاربر"}</p> */}
            </div>
          </div>
        )}

        {/* Menu items */}
        <div className="flex-1 px-4 py-6 space-y-4 font-myPeydaMedium">
          <button
            disabled={true}
            onClick={() => {
              navigate("/profile");
              setMenuOpen(false);
            }}
            className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 w-full p-3 rounded-lg transition"
          >
            {/* <UserIcon className="w-5 h-5 text-teal-600" /> */}
            <span>حساب کاربری</span>
          </button>
          <button
            disabled={true}
            onClick={() => {
              navigate("/settings");
              setMenuOpen(false);
            }}
            className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 w-full p-3 rounded-lg transition"
          >
            {/* <SettingsIcon className="w-5 h-5 text-teal-600" /> */}
            <span>تنظیمات</span>
          </button>
          <button
            disabled={true}
            onClick={() => {
              navigate("/about");
              setMenuOpen(false);
            }}
            className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 w-full p-3 rounded-lg transition"
          >
            {/* <InfoIcon className="w-5 h-5 text-teal-600" /> */}
            <span>درباره ما</span>
          </button>
          <button
            disabled={true}

            onClick={() => {
              navigate("/support");
              setMenuOpen(false);
            }}
            className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 w-full p-3 rounded-lg transition"
          >
            {/* <HelpIcon className="w-5 h-5 text-teal-600" /> */}
            <span>پشتیبانی</span>
          </button>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t font-myYekanMedium">
          {user ? (
            <button
              disabled={true}
              onClick={() => {
                logout();
                setMenuOpen(false);
              }}
              className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
            >
              خروج از حساب
            </button>
          ) : (
            <CustomButton
              handleOnClick={() => {
                navigate("/login");
                setMenuOpen(false);
              }}
              text="ورود یا ثبت نام"
              className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition"
            />
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavbarAddiction;
