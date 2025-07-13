import React from 'react';
import backgroundImage from '../assets/icons/banersarv2-editebirds.svg';
import sarv from "../assets/icons/Sarv.svg";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema, SignUpData } from "../schemas/SignUpSchema";

export default function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = async (data: SignUpData) => {
    try {
      const { username, email, password } = data;

      const response = await fetch('https://171.22.25.191/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "خطایی رخ داده است.");
      }

      console.log("ثبت موفق:", result);
      navigate("/dashboard");
    } catch (error: any) {
      alert(error.message || "ثبت‌نام با شکست مواجه شد.");
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
            ثبت نام
          </h1>
          <p className="text-gray-600 desktop:text-lg tablet:text-lg text-base font-myVazirRegular tracking-tight">
            برای ایجاد حساب، اطلاعات زیر را وارد کنید
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 text-right">
            <label htmlFor="username" className="block text-sm text-gray-700 font-myVazirRegular mb-1">
              نام کاربری
            </label>
            <input
              id="username"
              type="text"
              {...register("username")}
              className="w-full h-[44px] px-4 text-right border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
              dir="rtl"
            />
            {errors.username && <p className="text-red-600 text-sm mt-1">{errors.username.message}</p>}
          </div>

          <div className="mb-4 text-right">
            <label htmlFor="email" className="block text-sm text-gray-700 font-myVazirRegular mb-1">
              ایمیل
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="w-full h-[44px] px-4 text-right border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
              dir="rtl"
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div className="mb-4 text-right">
            <label htmlFor="password" className="block text-sm text-gray-700 font-myVazirRegular mb-1">
              رمز عبور
            </label>
            <input
              id="password"
              type="password"
              {...register("password")}
              className="w-full h-[44px] px-4 text-right border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
              dir="rtl"
            />
            {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <div className="mb-6 text-right">
            <label htmlFor="repeatPassword" className="block text-sm text-gray-700 font-myVazirRegular mb-1">
              تکرار رمز عبور
            </label>
            <input
              id="repeatPassword"
              type="password"
              {...register("repeatPassword")}
              className="w-full h-[44px] px-4 text-right border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
              dir="rtl"
            />
            {errors.repeatPassword && <p className="text-red-600 text-sm mt-1">{errors.repeatPassword.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full h-[42px] flex items-center justify-center font-myVazirRegular text-base text-primary-50 bg-primary-700 hover:bg-primary-500 rounded-xl transition-colors duration-200"
          >
            ادامه
          </button>
        </form>

        <div className="flex justify-center gap-2 text-sm mt-4 mb-1 font-myVazirFaNumRegular">
          <span>حساب کاربری دارید؟</span>
          <button
            type="button"
            className="text-primary-600"
            onClick={() => navigate("/login")}
          >
            ورود
          </button>
        </div>
      </div>
    </div>
  );
}
