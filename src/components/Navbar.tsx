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

  return (
    <nav className="relative w-full h-[79px] flex items-center justify-between text-Gray-950 border-b border-Gray-200 bg-white desktop:px-24 tablet:px-6 px-4 shadow-md py-4">
      <div className="flex items-center gap-2">
        <div className='flex flex-row justify-between items-center gap-3'>
          <button
            className='block tablet:hidden transition-opacity duration-300 ease-in-out'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="transition-all duration-300 ease-in-out">
              <img src={menu} alt="menu" className="w-6 h-6" />
            </div>
          </button>

          <button onClick={() => navigate('/')}>
            <img src={sarv} alt="sarv" />
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden tablet:flex items-center desktop:gap-10 gap-5 text-lg font-myVazirMedium text-background-Black">
        <li className="cursor-pointer"><button onClick={() => navigate('/')}>خانه</button></li>
        <li className="cursor-pointer"><button onClick={() => navigate('/therapists')}>درمانگران</button></li>
        <li className="cursor-pointer"><button onClick={() => navigate('/tests')} className=' flex flex-row items-center'>تست روانشناسی               <Down className="w-6 h-6" /> </button></li>
        <li className="cursor-pointer"><button onClick={() => navigate('/articles')}>مقالات</button></li>
      </ul>

      <CustomButton
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
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="transition-all duration-300 ease-in-out">
              <Right className="w-6 h-6" />
            </div>
          </button>
          <img src={sarv} alt="sarv" className='mx-auto' />
        </div>
        <ul className="flex flex-col gap-4 text-lg font-myVazirMedium">
          <li className="cursor-pointer">
            <button onClick={() => { setMenuOpen(false); navigate('/'); }}>خانه</button>
          </li>
          <li className="cursor-pointer">
            <button onClick={() => { setMenuOpen(false); navigate('/therapists'); }}>درمانگران</button>
          </li>
          <li className="cursor-pointer">
            <button onClick={() => { setMenuOpen(false); navigate('/tests'); }}>تست روانشناسی</button>
          </li>
          <li className="cursor-pointer">
            <button onClick={() => { setMenuOpen(false); navigate('/articles'); }}>مقالات</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
