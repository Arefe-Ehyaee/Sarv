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
import svgSmall from "../assets/icons/smalltreeBg.svg";
import right from "../assets/icons/chevron-right.svg"
import { ReactComponent as Left } from "../assets/icons/chevron-left.svg";

function TestTemplate() {

    const navigate = useNavigate();
    return (
        <div className="relative min-h-screen bg-Gray-100 text-Gray-950">
            <div className="hidden desktop:flex desktop:justify-center desktop:items-center desktop:min-h-screen">
                {/* Background SVGs */}
                <img
                    src={svgSmall}
                    alt="Background Left"
                    className="absolute left-[4%] bottom-0 pointer-events-none h-[876px] z-0"
                />

                <div className='flex flex-col'>
                    <button className="flex flex-row gap-[10px] items-center mb-[30px]" onClick={() => navigate('/articles')}>
                        <img src={right} alt="" />
                        <span className="font-myVazirRegular text-Gray-600 desktop:text-[18px] tablet:text-[18px] text-[14px]">خروج از آزمون</span>
                    </button>


                    <div className='flex flex-col justify-center items-center'>


                        <div className='relative z-10 bg-background-BG w-full px-[22px] py-[28px] rounded-[20px] mx-[96px]'>
                            <h5 className='font-myPeydaSemibold desktop:text- tablet:text-[32px] text-[28px]'>عنوان تست</h5>
                            <p>لطفا ً این قسمت را به دقت مطالعه کنید :</p>
                            <p>
                                می خواهیم درباره کسالت و ناراحتی های پزشکی و اینکه سلامت عمومی شما در طی یکماه گذشته تا به امروز چگونه بوده است اطلاعاتی بدست آوریم...
                            </p>
                        </div>

                    </div>

                    <div className='flex flex-row items-center justify-end mt-[30px]'>
                        <span className='font-myVazirRegular desktop:text-lg tablet:text-lg text-base text-Gray-600'>ادامه</span>
                        <button className='flex flex-row justify-center items-center mr-[6px] text-primary-600 rounded-[4px] bg-primary-200 border border-primary-300 w-[42px] h-[42px] z-10'>
                            <Left></Left>
                        </button>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default TestTemplate;
