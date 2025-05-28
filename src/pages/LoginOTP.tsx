import React, { useState } from 'react';
import backgroundImage from '../assets/icons/banersarv2-editebirds.svg';
import sarv from "../assets/icons/Sarv.svg";
import VerificationCode from '../components/VerificationCode';

export default function LoginOTP() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [showVerification, setShowVerification] = useState(false);

    const handleContinue = () => {
        if (phoneNumber.trim() !== '') {
            setShowVerification(true);
        }
    };

    return (
        <div className="min-h-screen flex items-center desktop:justify-start justify-center desktop:pr-40 p-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="absolute inset-0 bg-black/10"></div>
            </div>

            <div className="relative z-10 bg-white rounded-3xl shadow-2xl px-5 py-[30px] desktop:w-[430px] tablet:w-[435px] w-[381px]">
                {!showVerification ? (
                    <>
                        <div className="text-center mb-5">
                            <div className="inline-flex items-center mb-4">
                                <img src={sarv} alt="sarv" />
                            </div>
                            <h1 className="desktop:text-[32px] tablet:text-[28px] text-[22px] font-myVazirMedium text-gray-800 mb-2">ورود و ثبت نام</h1>
                            <p className="text-gray-600 desktop:text-lg tablet:text-lg text-base font-myVazirRegular tracking-tight">برای ورود و یا ثبت نام شماره موبایل خود را وارد کنید</p>
                        </div>

                        <div className="mb-2">
                            <input
                                type="tel"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                placeholder=""
                                className="desktop:w-[210px] mx-auto flex justify-center h-[44px] pl-14 pr-4 py-4 text-left border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                                dir="rtl"
                            />
                        </div>

                        <button
                            onClick={handleContinue}
                            className="desktop:w-[210px] h-[42px] mx-auto flex flex-row items-center justify-center font-myVazirRegular desktop:text-lg tablet:text-lg text-base text-primary-50 bg-primary-700 hover:bg-primary-500 rounded-xl transition-colors duration-200 mb-6"
                        >
                            ادامه
                        </button>
                    </>
                ) : (
                    <VerificationCode phoneNumber={phoneNumber} />
                )}
            </div>
        </div>
    );
}
