import sarv from "../assets/icons/Sarv.svg";
import tree from "../assets/icons/treeArticles.svg"
import CustomButton from './CustomeButton';
import menu from "../assets/icons/menu.svg";
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Right } from "../assets/icons/chevron-right.svg";
import { ReactComponent as Down } from "../assets/icons/chevron-down.svg";
import useUserStore from '../store/UserStore';
import { useState } from "react";

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
    navigate('/');
  };


  return (
    <nav className="relative w-full h-[79px] flex items-center justify-between text-Gray-950 border-b border-Gray-200 bg-white desktop:px-24 tablet:px-6 px-4 shadow-md py-4 z-50">
      <div className="flex items-center gap-2">
        <div className='flex flex-row justify-between items-center gap-3'>
          <button
            className='block tablet:hidden transition-opacity duration-300 ease-in-out'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img src={menu} alt="menu" className="w-6 h-6" />
          </button>

          <button className="flex flex-row items-center gap-1" onClick={() => navigate('/')}>
            <img src={tree} alt="sarv" className="w-[30%] h-[30%]"/>
            <span className="font-myYekanMedium text-3xl text-green-900">سرو</span>
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden tablet:flex items-center desktop:gap-10 gap-5 text-lg font-myVazirRegular text-background-Black relative">
        <li className="cursor-pointer"><button onClick={() => navigate('/')}>خانه</button></li>
        <li className="cursor-pointer"><button onClick={() => navigate('/sarvBot')}>سروبات</button></li>
        <li className="cursor-pointer"><button onClick={() => navigate('/Bot')}>تست</button></li>
        <li className="cursor-pointer"><button onClick={() => navigate('/therapists')}>درمانگران</button></li>
        <li className="relative cursor-pointer">
          <button onClick={toggleDropdown} className='flex flex-row items-center'>
            تست روانشناسی
            <Down className={`w-6 h-6 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          {dropdownOpen && (
            <ul className="absolute top-full text-center left-1/2 transform -translate-x-1/2 mt-8 bg-white border border-gray-200 rounded-lg shadow-lg py-2 w-max z-50">
              <li className="px-4 py-2 whitespace-nowrap hover:bg-gray-100 cursor-pointer" onClick={() => { setDropdownOpen(false); navigate('/tests/ghq'); }}>
                تست سلامت عمومی (GHQ)              </li>
              <li className="px-4 py-2 whitespace-nowrap hover:bg-gray-100 cursor-pointer" onClick={() => { setDropdownOpen(false); navigate('/tests/bdi'); }}>
                تست افسردگی بک (BDI)              </li>
              <li className="px-4 py-2 whitespace-nowrap hover:bg-gray-100 cursor-pointer" onClick={() => { setDropdownOpen(false); navigate('/tests/bai'); }}>
                تست اضطراب بک (BAI)              </li>
              <hr className='mx-[27px] text-Gray-400'></hr>
              <li className="px-4 py-2 text-primary-400 whitespace-nowrap hover:bg-gray-100 cursor-pointer" onClick={() => { setDropdownOpen(false); navigate('/tests'); }}>
                همه تست‌ها          </li>
            </ul>
          )}
        </li>
        <li className="cursor-pointer"><button onClick={() => navigate('/articles')}>مقالات</button></li>
      </ul>

      {user ? (

        <div>
          <button onClick={toggleProfileDropdown} className="text-primary-700 border-[0.6px]  hover:bg-primary-50 focus:bg-primary-800 focus:text-white border-primary-700 h-[44px] px-[18px] py-[10px] rounded-full">
            {user.username}
          </button>
          {profiledropdownOpen && (
            <ul className="absolute top-full text-center  transform translate-x-[34%] mt-2 text-lg font-myVazirRegular bg-white border border-gray-200 rounded-lg shadow-lg py-2 w-max z-50">
              <li className="px-4 py-2 whitespace-nowrap hover:bg-gray-100 cursor-pointer" onClick={() => { setProfileDropdownOpen(false); navigate('/profile'); }}>
                حساب کاربری            </li>
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
        <CustomButton
          handleOnClick={() => navigate('/login')}
          text={'ورود یا ثبت نام'}
          className={'text-primary-50 bg-primary-700  hover:bg-primary-500 focus:bg-primary-900 h-[44px] px-[18px] py-[10px]'}
        />
      )}


      {/* Mobile Menu */}
      <div
        className={`absolute top-0 right-0 tablet:w-[274px] w-[230px] font-myVazirRegular text-base text bg-white shadow-md px-6 py-[34px] z-50 tablet:hidden 
  transition-all duration-300 ease-in-out transform ${menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5 pointer-events-none'
          }`}
      >
        <div className='flex flex-row items-center tablet:mb-[60px] mb-10'>
          <button
            className='block tablet:hidden transition-opacity duration-300 ease-in-out'
            onClick={() => setMenuOpen(false)}
          >
            <Right className="w-6 h-6" />
          </button>
          <img src={sarv} alt="sarv" className='mx-auto' />
        </div>
        <ul className="flex flex-col gap-4">
          <li><button onClick={() => { setMenuOpen(false); navigate('/'); }}>خانه</button></li>
          <li><button onClick={() => { setMenuOpen(false); navigate('/therapists'); }}>درمانگران</button></li>
          <li className="relative">
            <div className="flex items-center justify-between">
              <button onClick={toggleMiniDropdown}>تست روانشناسی</button>
              <Down className={`w-6 h-6 transition-transform ${minidropdownOpen ? 'rotate-180' : ''}`} onClick={toggleMiniDropdown} />
            </div>
            {minidropdownOpen && (
              <ul className="mt-4 flex flex-col gap-4 tablet:text-sm text-xs">
                <li><button onClick={() => { setMenuOpen(false); navigate('/tests/ghq'); }}>
                  تست سلامت عمومی (GHQ)
                </button></li>
                <li><button onClick={() => { setMenuOpen(false); navigate('/tests/bdi'); }}>
                  تست افسردگی بک (BDI)
                </button></li>
                <li><button onClick={() => { setMenuOpen(false); navigate('/tests/bai'); }}>
                  تست اضطراب بک (BAI)
                </button></li>
                <hr className='mx-[2px] text-Gray-400'></hr>
                <li><button className="text-primary-400" onClick={() => { setMenuOpen(false); navigate('/tests'); }}>
                  همه تست‌ها
                </button></li>
              </ul>
            )}
          </li>
          <li><button onClick={() => { setMenuOpen(false); navigate('/articles'); }}>مقالات</button></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
