import React, { useState } from 'react';
import backgroundImage from '../assets/icons/banersarv2-editebirds.svg';
import sarv from "../assets/icons/Sarv.svg";
import useUserStore from '../store/UserStore';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);

  if (!isOpen) return null;

  const handleContinue = async () => {
    if (email.trim() === '' || password.trim() === '') {
      setMessage('لطفاً ایمیل و رمز عبور را وارد کنید');
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/api/v1/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.status === 200) {
        setUser(result.data, result.token);
        toast.success("با موفقیت وارد شدید.");
        onClose(); // close modal
        navigate('/profile');
      } else if (response.status === 401) {
        setMessage(result.message || 'ایمیل یا رمز اشتباه است');
      } else {
        toast.error('خطا در ورود، لطفاً دوباره تلاش کنید');
      }
    } catch (error) {
      console.error('Login error:', error);
      setMessage('اتصال به سرور برقرار نشد');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        className="relative bg-white rounded-3xl shadow-2xl px-5 py-6 desktop:w-[430px] tablet:w-[435px] w-[380px]"
        
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 left-2 text-gray-600 text-lg font-bold"
        >
          ✕
        </button>

        <div className="text-center mb-5 relative z-10">
          <div className="inline-flex items-center mb-4">
            <img src={sarv} alt="sarv" />
          </div>
          <h1 className="text-2xl font-myVazirMedium text-gray-800 mb-2">
            ورود
          </h1>
          <p className="text-gray-600 text-base font-myVazirRegular">
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
          className="w-full h-[42px] flex items-center justify-center font-myVazirRegular text-base text-white bg-green-600 hover:bg-green-500 rounded-xl transition-colors duration-200"
        >
          ورود
        </button>

        <div className="flex justify-center gap-2 text-sm mt-4 font-myVazirFaNumRegular">
          <span>حساب ندارید؟</span>
          <button
            type="button"
            className="text-green-600"
            onClick={() => {
              onClose();
              navigate('/signup');
            }}
          >
            ثبت نام
          </button>
        </div>
      </div>
    </div>
  );
}
