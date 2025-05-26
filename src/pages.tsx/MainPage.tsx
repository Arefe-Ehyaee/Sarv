import React from 'react';
import Navbar from '../components/Navbar';
import heroBanner from '../assets/icons/banersarv2-editebirds.svg';
import heroMobile from '../assets/icons/banner_mobile.svg';
import CustomButton from '../components/CustomeButton';
import left from "../assets/icons/arrow-left.svg"
import MainContent from '../components/WhyUs';
import WhyUs from '../components/WhyUs';
import Services from '../components/Services';
import HowBotWorks from '../components/HowBotWorks';
import FAQSection from '../components/FQA';
import CTA from '../components/CTA';
import Comments from '../components/Comments';
import Footer from '../components/Footer';
import ArticleCard from '../components/ArticleCard';
import Articles from '../components/Articles';
import { NavLink, useNavigate } from "react-router-dom";

function MainPage() {

      const navigate = useNavigate();
    return (
        <div className="min-h-screen text-Gray-950">
            <Navbar />
            {/* Hero Section */}
            <div className='desktop:h-24 tablet:h-[72px] h-[160px] desktop:mt-[49px] tablet:mt-[51px] mt-[41px] flex items-center'>
                <h1 className="desktop:text-[56px] tablet:text-[40px] text-[36px] font-myPeydaSemibold desktop:px-24 tablet:px-6 px-3 tracking-tight190">
                    سرو، اولین تراپیست هوشمند ایرانی
                </h1>
            </div>

            <div className="relative w-full">

                <div className="desktop:absolute desktop:top-[10px] tablet:mb-[42px] mb-[40px] text-right desktop:px-24 tablet:px-6 px-3">
                    <p className="desktop:text-[24px] tablet:text-[22px] text-[18px] font-myVazirMedium leading-6 tracking-tight190 py-[6px]">
                        با دسترسی به درمانگران واقعی و پشتیبانی هوش مصنوعی، به سلامت روان خود اهمیت دهید.
                    </p>
                </div>
                <img
                    src={heroBanner}
                    alt="سرو hero banner"
                    className="w-full h-auto hidden tablet:block"
                />
                                <img
                    src={heroMobile}
                    alt="سرو hero banner"
                    className="w-full h-auto desktop:hidden tablet:hidden"
                />

                <CustomButton handleOnClick={()=>navigate('/sarvBot')} iconsrc={left} text={'امروز سفر خود را آغاز کنید'} className={'absolute top-[74px] desktop:mr-24 tablet:mr-6 mr-3 xs:mt-2 text-white bg-primary-400 desktop:h-[47px] tablet:h-[44px] mobile:h-[42px] desktop:w-[241px] tablet:w-[222px] mobile:w-[218px] px-[18px] py-[10px] desktop:text-[18px] tablet:text-[16px] mobile:text-[14px]'}></CustomButton>
            </div>

            {/* Main content goes here */}
            <WhyUs></WhyUs>
            <Services></Services>
            <HowBotWorks></HowBotWorks>
            <Comments></Comments>
            <Articles></Articles>
            <FAQSection></FAQSection>
            <CTA></CTA>
            <Footer></Footer>
        </div>
    )
}

export default MainPage;
