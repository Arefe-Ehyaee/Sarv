import React, { useState } from 'react';
import sarv from "../assets/icons/Sarv.svg";
import CustomButton from './CustomeButton';
import menu from "../assets/icons/menu.svg";
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Right } from "../assets/icons/chevron-right.svg";
import { ReactComponent as Down } from "../assets/icons/chevron-down.svg";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

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

          <button onClick={() => navigate('/')}>
            <img src={sarv} alt="sarv" />
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden tablet:flex items-center desktop:gap-10 gap-5 text-lg font-myVazirMedium text-background-Black relative">
        <li className="cursor-pointer"><button onClick={() => navigate('/')}>خانه</button></li>
        <li className="cursor-pointer"><button onClick={() => navigate('/therapists')}>درمانگران</button></li>
        <li className="relative cursor-pointer">
          <button onClick={toggleDropdown} className='flex flex-row items-center'>
            تست روانشناسی
            <Down className={`w-6 h-6 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          {dropdownOpen && (
            <ul className="absolute top-full left-4 mt-[28px] bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[180px] z-50">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => { setDropdownOpen(false); navigate('/tests/personality'); }}>
                تست شخصیت
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => { setDropdownOpen(false); navigate('/tests/stress'); }}>
                تست استرس
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => { setDropdownOpen(false); navigate('/tests/anxiety'); }}>
                تست اضطراب
              </li>
            </ul>
          )}
        </li>
        <li className="cursor-pointer"><button onClick={() => navigate('/articles')}>مقالات</button></li>
      </ul>

      <CustomButton
        handleOnClick={() => navigate('/login')}
        text={'ورود و ثبت نام'}
        className={'text-primary-50 bg-primary-700 h-[44px] px-[18px] py-[10px]'}
      />

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 right-0 tablet:w-[274px] w-[230px] bg-white shadow-md px-6 py-[34px] z-50 tablet:hidden 
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
        <ul className="flex flex-col gap-4 text-lg font-myVazirMedium">
          <li><button onClick={() => { setMenuOpen(false); navigate('/'); }}>خانه</button></li>
          <li><button onClick={() => { setMenuOpen(false); navigate('/therapists'); }}>درمانگران</button></li>
          <li>
            <button onClick={() => { setMenuOpen(false); navigate('/tests'); }}>تست روانشناسی</button>
            {/* Optionally add nested tests in mobile as well */}
            <ul className="ml-4 mt-2 text-sm">
              <li><button onClick={() => { setMenuOpen(false); navigate('/tests/personality'); }}>تست شخصیت</button></li>
              <li><button onClick={() => { setMenuOpen(false); navigate('/tests/stress'); }}>تست استرس</button></li>
              <li><button onClick={() => { setMenuOpen(false); navigate('/tests/anxiety'); }}>تست اضطراب</button></li>
            </ul>
          </li>
          <li><button onClick={() => { setMenuOpen(false); navigate('/articles'); }}>مقالات</button></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
