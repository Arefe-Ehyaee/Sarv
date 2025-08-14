import sarv from "../assets/icons/Sarv.svg";
import menu from "../assets/icons/menu.svg";
import { ReactComponent as Right } from "../assets/icons/chevron-right.svg";
import { ReactComponent as Down } from "../assets/icons/chevron-down.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useUserStore from "../store/UserStore";
import CustomButton from "../components/CustomeButton";
import joy from "./joy-wave.svg";
import joyModern from "./joy-modern.svg"

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [minidropdownOpen, setMiniDropdownOpen] = useState(false);
  const [profiledropdownOpen, setProfileDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const toggleMiniDropdown = () => setMiniDropdownOpen((prev) => !prev);
  const toggleProfileDropdown = () => setProfileDropdownOpen((prev) => !prev);
  const user = useUserStore((state) => state.user);

  const logout = () => {
    useUserStore.getState().clearUser();
    navigate("/");
  };

  return (
    <nav className="relative w-full h-[79px] flex items-center justify-between border-b border-gray-200 bg-white px-4 md:px-12 shadow-md py-4 z-50">
      {/* Logo + Mobile menu button */}
      <div className="flex items-center gap-3">
        <button
          className="block md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img src={menu} alt="menu" className="w-6 h-6" />
        </button>
        <button onClick={() => navigate("/")}>
          <img src={joyModern} alt="" className="w-8 h-8" />
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8 text-lg font-myVazirRegular text-gray-800">
        <li>
          <button onClick={() => navigate("/")}>خانه</button>
        </li>
        <li>
          <button onClick={() => navigate("/sarvBot")}>سروبات</button>
        </li>
        <li>
          <button onClick={() => navigate("/Bot")}>نمونه</button>
        </li>
        <li>
          <button onClick={() => navigate("/therapists")}>کوچ اعتیاد</button>
        </li>
        <li className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-1"
          >
            تست‌ها
            <Down
              className={`w-5 h-5 transition-transform ${dropdownOpen ? "rotate-180" : ""
                }`}
            />
          </button>
          {dropdownOpen && (
            <ul className="absolute top-full mt-3 bg-white border border-gray-200 rounded-lg shadow-lg py-2 w-max z-50">
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setDropdownOpen(false);
                  navigate("/tests/ghq");
                }}
              >
                تست سلامت عمومی (GHQ)
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setDropdownOpen(false);
                  navigate("/tests/bdi");
                }}
              >
                تست افسردگی بک (BDI)
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setDropdownOpen(false);
                  navigate("/tests/bai");
                }}
              >
                تست اضطراب بک (BAI)
              </li>
              <hr className="mx-4" />
              <li
                className="px-4 py-2 text-teal-600 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setDropdownOpen(false);
                  navigate("/tests");
                }}
              >
                همه تست‌ها
              </li>
            </ul>
          )}
        </li>
        <li>
          <button onClick={() => navigate("/articles")}>مقالات</button>
        </li>
      </ul>

      {/* Right side */}
      {user ? (
        <div className="relative">
          <button
            onClick={toggleProfileDropdown}
            className="text-teal-700 border border-teal-700 px-4 py-2 rounded-full hover:bg-teal-50"
          >
            {user.username}
          </button>
          {profiledropdownOpen && (
            <ul className="absolute top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 w-max z-50">
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
          text={"ورود یا ثبت نام"}
          className={
            "bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700"
          }
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 right-0 w-full font-myVazirRegular text-base bg-white shadow-md px-6 py-6 z-50 tablet:hidden
    transition-all duration-300 ease-in-out transform ${menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <img src={sarv} alt="sarv" className="h-8" />
          <button onClick={() => setMenuOpen(false)}>
            <Right className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col gap-5">
          <li><button onClick={() => { navigate("/"); setMenuOpen(false); }}>خانه</button></li>
          <li><button onClick={() => { navigate("/sarvBot"); setMenuOpen(false); }}>سروبات</button></li>
          <li><button onClick={() => { navigate("/Bot"); setMenuOpen(false); }}>نمونه</button></li>
          <li><button onClick={() => { navigate("/therapists"); setMenuOpen(false); }}>کوج اعتیاد</button></li>
          <li><button onClick={() => { navigate("/tests"); setMenuOpen(false); }}>تست‌ها</button></li>
          <li><button onClick={() => { navigate("/articles"); setMenuOpen(false); }}>مقالات</button></li>
        </ul>

        {/* CTA */}
        <div className="mt-8">
          {user ? (
            <button
              onClick={() => { logout(); setMenuOpen(false); }}
              className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
            >
              خروج از حساب
            </button>
          ) : (
            <CustomButton
              handleOnClick={() => { navigate("/login"); setMenuOpen(false); }}
              text={"ورود یا ثبت نام"}
              className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition"
            />
          )}
        </div>
      </div>


    </nav>
  );
}

export default Navbar;
