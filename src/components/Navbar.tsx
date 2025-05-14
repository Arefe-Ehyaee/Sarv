import React from 'react';
import sarv from "../assets/icons/Sarv.svg"
import CustomButton from './CustomeButton';
import menu from "../assets/icons/menu.svg"
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="w-full h-[79px] flex items-center justify-between text-gray-950 border-b border-gray-200 bg-white desktop:px-24 tablet:px-6 px-4 shadow-md py-4">
      <div className="flex items-center gap-2">
        <div className='flex flex-row justify-between items-center gap-3'>
          <button className='block tablet:hidden'>
            <img src={menu} alt="menu" />
          </button>

          <button onClick={() => navigate('/')}>
            <img src={sarv} alt="sarv" />
          </button>
        </div>


      </div>
      <ul className="hidden tablet:flex items-center desktop:gap-10 gap-5 text-lg font-myVazirMedium">
        <li className="cursor-pointer">
          <button onClick={() => navigate('/')}>
            خانه
          </button>
        </li>
        <li className="cursor-pointer">درمانگران</li>
        <li className="cursor-pointer">تست روانشناسی</li>
        <li className="cursor-pointer">
          <button onClick={() => navigate('/articles')}>
            مقالات
          </button>
        </li>
      </ul>
      {/* <button className="h-[47px] w-[71px] px-[20px] py-[10px] border-2 border-primary-600 rounded-full flex items-center justify-center text-background-Black text-lg font-myVazirMedium transition hover:bg-green-50">
        ورود
      </button> */}

      <CustomButton text={'ورود'} className={'border-2 text-gray-950 border-primary-600 h-[47px] w-[71px] px-[20px] py-[10px]'}></CustomButton>
    </nav>
  );
}

export default Navbar;
