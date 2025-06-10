import Navbar from '../components/Navbar';
import heroBanner from '../assets/icons/banersarv2-editebirds.svg';
import heroMobile from '../assets/icons/banner_mobile.svg';
import heroTablet from '../assets/icons/hero sectionTab.svg';
import CustomButton from '../components/CustomeButton';
import left from "../assets/icons/arrow-left.svg"
import WhyUs from '../components/WhyUs';
import Services from '../components/Services';
import HowBotWorks from '../components/HowBotWorks';
import FAQSection from '../components/FQA';
import CTA from '../components/CTA';
import Comments from '../components/Comments';
import Footer from '../components/Footer';
import Articles from '../components/Articles';
import { NavLink, useNavigate } from "react-router-dom";

function MainPage() {

    const navigate = useNavigate();
    return (
        <div className="min-h-screen text-Gray-950 overflow-x-hidden">
            <Navbar />
            {/* Hero Section */}

            <div className="relative w-full">

                <div className="desktop:absolute tablet:absolute desktop:top-[10px]  tablet:mb-[50px] mb-[40px] text-right ">
                    <div className='desktop:h-24 tablet:h-[72px] h-[160px] desktop:mt-[56px] tablet:mt-[56px] mt-[41px] flex flex-col items-start'>
                        <h1 className="desktop:text-[56px] tablet:text-[40px] text-[36px] font-myPeydaSemibold desktop:px-24 tablet:px-6 px-3 tracking-tight190">
                            سرو، ارائه دهنده <br />
                            خدمات تراپی هوشمند </h1>

                        <p className="desktop:text-[24px] tablet:text-[22px] text-[18px] font-myVazirMedium leading-10  desktop:px-24 tablet:px-6 px-3 tracking-tight190 py-[6px]">
                            سرو، همراه هوشمند که همیشه آماده ی گوش دادن <br /> به حرفات، کمک و حمایت <br className="hidden tablet:block desktop:hidden" /> کردن هست.                    </p>

                    </div>


                </div>
                <img
                    src={heroBanner}
                    alt="سرو hero banner"
                    className="w-full h-auto hidden tablet:block desktop:block tablet:mt-[0px]"
                />
 

                <img
                    src={heroMobile}
                    alt="سرو hero banner"
                    className="w-full h-auto desktop:hidden tablet:hidden"
                />

                <CustomButton handleOnClick={() => navigate('/sarvBot')} iconsrc={left} text={'امروز سفر خود را آغاز کنید'} className={'absolute desktop:top-[338px] tablet:top-[317px] top-[260px] desktop:mr-24 tablet:mr-6 mr-3 xs:mt-2 text-primary-50 bg-primary-700 desktop:h-[47px] tablet:h-[44px] mobile:h-[42px] desktop:w-[241px] tablet:w-[222px] mobile:w-[218px] px-[18px] py-[10px] desktop:text-[18px] tablet:text-[16px] mobile:text-[14px]'}></CustomButton>
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
