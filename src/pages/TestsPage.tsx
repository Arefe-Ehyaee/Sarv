
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { NavLink, useNavigate } from "react-router-dom";
import tree from "../assets/icons/treeArticles.svg";
import TestCard from '../components/Testcard';
import TestsCategory from '../components/TestsCategory';
import svg1 from "../assets/images/backTree_big.svg";
import { ReactComponent as Arrow } from "../assets/icons/arrow-left-green.svg";
import CustomButton from '../components/CustomeButton';
import patternleft from "../assets/icons/treePattern.svg";
import patternright from "../assets/icons/treePatternRight.svg";
import right from "../assets/icons/chevron-right.svg";

function TestsPage() {

    const navigate = useNavigate();
    return (
        <div className="relative min-h-screen text-Gray-950 bg-Gray-50 overflow-hidden">

            <div className="hidden desktop:block">
                {/* Background SVGs */}
                <img
                    src={svg1}
                    alt="Background Left"
                    className="absolute left-0 top-[4%] z-0 pointer-events-none"
                />
                {/* <img
                src={svg2}
                alt="Background Right"
                className="absolute right-0 bottom-[20%] z-0 pointer-events-none"
            /> */}
            </div>


            <div className="relative z-10">
                <Navbar />
                {/* Top Section */}

                {/* <div className='desktop:h-[374px] tablet:h-[358px] h-[348px] w-full bg-primary-100 desktop:px-[96px] px-[24px] desktop:py-[100px] tablet:py-[80px] py-[62px]'>
                    <p className='font-myPeydaSemibold desktop:text-[56px] tablet:text-[40px] text-[36px] mb-[30px]' >خودت را بهتر بشناس</p>
                    <p className='font-myVazirRegular desktop:text-[20px] tablet:text-[18px] text-base mb-[16px]'>این گامی آرام به‌سوی شناخت عمیق‌تر خود است. مجموعه آزمون‌های روان‌شناسی ما به شما کمک می‌کند تا جنبه‌های مختلف ذهن و احساسات خود را بررسی کنید؛ از خلق‌وخو و اضطراب گرفته تا شخصیت، روابط، استرس و موارد دیگر. این ابزارها با هدف افزایش آگاهی، درک بهتر خود و حمایت از رشد فردی شما طراحی شده‌اند.</p>
                </div> */}

                <div className="desktop:px-[96px] tablet:px-6 px-4 pb-[150px]">
                    <div className='flex flex-row justify-between mt-[120px]'>
                        <div>
                            <h4 className='font-myPeydaSemibold text-4xl text-Gray-950 mb-1'>آزمون‌های روانشناسی سرو</h4>
                            <h5 className='font-myVazirRegular text-lg text-Gray-950 mb-[28px]'> با مجموعه‌ای از آزمون‌های علمی، افکار، احساسات و رفتارهای خود را بهتر بشناسید.</h5>
                        </div>
                        <img src={tree} alt="sarv" />
                    </div>

                    <TestsCategory />

                    <div className="grid grid-cols-1 desktop:grid-cols-2 gap-[32px] place-items-center mt-[100px]">
                        <TestCard testName={'ghq'} testTitle='آزمون سلامت عمومی (GHQ)' testType='سلامت روان' questionCounts={28} description={' پرسشنامه سلامت عمومی (GHQ) ابزاری معتبر برای غربالگری سلامت روان است که به شناسایی ناراحتی‌های احساسی و نشانه‌های اولیه مشکلات روانی کمک می‌کند. این آزمون آگاهی فرد را نسبت به وضعیت روانی‌اش افزایش داده و در صورت نیاز، مسیر دریافت حمایت را هموار می‌سازد.'} image={''}></TestCard>
                        <TestCard testName={'bdi'} testTitle="آزمون افسردگی بک (BDI)" testType='اضطراب و افسردگی' questionCounts={21} description={' پرسشنامه سلامت عمومی (GHQ) ابزاری معتبر برای غربالگری سلامت روان است که به شناسایی ناراحتی‌های احساسی و نشانه‌های اولیه مشکلات روانی کمک می‌کند. این آزمون آگاهی فرد را نسبت به وضعیت روانی‌اش افزایش داده و در صورت نیاز، مسیر دریافت حمایت را هموار می‌سازد.'} image={''}></TestCard>
                        <TestCard testName="bai" testTitle="آزمون اضطراب بک (BAI)" testType='اضطراب و افسردگی' questionCounts={21} description="این آزمون به سنجش سطح اضطراب شما می‌پردازد و برای ارزیابی نشانه‌های فیزیولوژیکی اضطراب طراحی شده است." image=""
                        />
                    </div>
                </div>


                <div className="relative h-[269px] bg-primary-800 mt-[120px] flex flex-col items-center justify-center text-center">
                    <img src={patternleft} alt="" className='absolute  desktop:left-0 tablet:left-0 -left-24 h-full' />
                    <img src={patternright} alt="" className='absolute desktop:right-0 tablet:right-0 -right-24 h-full' />

                    <h5 className="absolute top-[54px] text-primary-200 font-myPeydaSemibold desktop:text-[32px] tablet:text-[32px] text-[22px]">
                        فرصت یک جلسه مشاوره را از خودت نگیر!                    </h5>


                    <div className="absolute desktop:top-[134px] tablet:top-[131hpx] top-[136px] w-full flex justify-center gap-10 space-x-4 text-Gray-950 font-myVazirSemibold text-sm">
                                                <CustomButton
                            text={"شروع تست رایگان"}
                            handleOnClick={()=> ("/tests")}
                            className={"w-[164px] h-[41px] text-primary-700 border-[0.6px] bg-white  hover:bg-primary-50 focus:bg-primary-500 focus:text-background-BG"}
                        />
                        <button
                            onClick={() => navigate("/login")}
                            className="  text-primary-300 text-sm px-4 py-2 rounded-xl font-myVazirRegular"
                        >
                            <span className="font-myVazirRegular text-primary-300 desktop:text-[18px] tablet:text-[18px] mobile:text-base">
                                ورود به حساب کاربری
                            </span>
                        </button>
                    </div>
                </div>

                <Footer></Footer>

            </div>
        </div>
    )
}

export default TestsPage;
