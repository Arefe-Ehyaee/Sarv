// src/pages/ComingSoon.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import commingSoon from "../assets/images/20250515_0108_Watering Young Arborvitae_remix_01jv8bp2rvfp8sbbvxmmhgjqkj 2.png";

const ComingSoon: React.FC = () => {
    return (
        <div className="min-h-screen text-gray-950">
            <Navbar />

            <div className="relative w-full">

                <div className="desktop:hidden tablet:hidden bg-[#FFFEF4]  top-0 right-0 w-full h-full flex flex-col items-start text-gray-950 px-3 tablet:px-6 desktop:px-24">
                    <p className="desktop:text-[56px] tablet:text-[40px] text-[36px] font-myPeydaSemibold tracking-tight190">
                        به زودی ...
                    </p>
                    <p className="desktop:text-[24px] tablet:text-[22px] text-[18px] font-myVazirMedium leading-6 tracking-tight190 pt-[4px]">
                        سرو به محض رویش کامل، در دسترس قرار خواهد گرفت.                    </p>
                </div>

                {/* Image */}
                <img
                    src={commingSoon}
                    alt="سرو hero banner"
                    className="w-full h-auto object-cover"
                />

                {/* Overlay Text */}
                <div className="absolute top-0 right-0 w-full h-full flex flex-col items-start text-gray-950 px-3 tablet:px-6 desktop:px-24">
                    <p className="desktop:text-[56px] tablet:text-[40px] text-[36px] font-myPeydaSemibold tracking-tight190">
                        به زودی ...
                    </p>
                    <p className="desktop:text-[24px] tablet:text-[22px] text-[18px] font-myVazirMedium leading-6 tracking-tight190 pt-[4px]">
                        سرو به محض رویش کامل، در دسترس قرار خواهد گرفت.                    </p>
                </div>
            </div>


            <Footer />
        </div>
    );
};

export default ComingSoon;
