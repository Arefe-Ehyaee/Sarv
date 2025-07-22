import React, { useState } from 'react';
import backgroundImage from '../assets/icons/banersarv2-editebirds.svg';
import sarv from "../assets/icons/Sarv.svg";
import { useNavigate } from 'react-router-dom';
import useUserStore from '../store/UserStore';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);
  const { token } = useUserStore();
  const handleContinue = async () => {
    if (email.trim() === '' || password.trim() === '') {
      setMessage('لطفاً ایمیل و رمز عبور را وارد کنید');
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/api/v1/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.status === 200) {
        setUser(result.data, result.token);
        navigate('/profile');
        console.log("Auth token:", token);

      } else if (response.status === 401) {
        setMessage(result.message || 'ایمیل یا رمز اشتباه است');
      } else {
        setMessage('خطا در ورود، لطفاً دوباره تلاش کنید');
      }
    } catch (error) {
      console.error('Login error:', error);
      setMessage('اتصال به سرور برقرار نشد');
    }
  };

  return (
    <div className="min-h-screen flex items-center desktop:justify-start justify-center desktop:pr-40 p-4 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="relative z-10 bg-white rounded-3xl shadow-2xl px-5 py-[30px] desktop:w-[430px] tablet:w-[435px] w-[381px]">
        <div className="text-center mb-5">
          <div className="inline-flex items-center mb-4">
            <img src={sarv} alt="sarv" />
          </div>
          <h1 className="desktop:text-[32px] tablet:text-[28px] text-[22px] font-myVazirMedium text-gray-800 mb-2">
            ورود
          </h1>
          <p className="text-gray-600 desktop:text-lg tablet:text-lg text-base font-myVazirRegular tracking-tight">
            لطفاً برای ورود اطلاعات خود را وارد کنید
          </p>
        </div>

        <div className="mb-4 text-right">
          <label className="block text-sm text-gray-700 font-myVazirRegular mb-1" htmlFor="email">
            ایمیل
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-[44px] px-4 text-right border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
            dir="rtl"
          />
        </div>

        <div className="mb-6 text-right">
          <label className="block text-sm text-gray-700 font-myVazirRegular mb-1" htmlFor="password">
            رمز عبور
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-[44px] px-4 text-right border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
            dir="rtl"
          />
        </div>

        {message && (
          <div className="text-red-600 text-sm mb-4 text-center font-myVazirRegular">
            {message}
          </div>
        )}

        <button
          onClick={handleContinue}
          className="w-full h-[42px] flex items-center justify-center font-myVazirRegular text-base text-primary-50 bg-primary-700 hover:bg-primary-500 rounded-xl transition-colors duration-200"
        >
          ورود
        </button>

        <div className="flex justify-center gap-2 text-sm mt-4 mb-1 font-myVazirFaNumRegular">
          <span>حساب ندارید؟</span>
          <button
            type="button"
            className="text-primary-600"
            onClick={() => navigate("/signup")}
          >
            ثبت نام
          </button>
        </div>
      </div>
    </div>
  );
}
