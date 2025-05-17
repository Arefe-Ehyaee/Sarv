
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { NavLink, useNavigate } from "react-router-dom";
import tree from "../assets/icons/treeArticles.svg";
import TherapistsCategory from '../components/TherapistsCategory';
import TherapistCard from '../components/TherapistCard';
import doctor from "../assets/images/Leonardo_Phoenix_10_make_a_realistic_woman_portrait_with_glass_3 1.png"

function TherapistsPage() {

    const navigate = useNavigate();
    return (
        <div className="min-h-screen text-gray-950">
            <Navbar />
            {/* Top Section */}

            <div className='desktop:h-[438px] tablet:h-[392px] h-[460px] w-full bg-primary-100 desktop:px-[96px] px-[24px] desktop:py-[100px] tablet:py-[80px] py-[62px]'>
                <p className='font-myPeydaSemibold desktop:text-[56px] tablet:text-[40px] text-[36px] mb-[30px]' >کدام درمانگر مناسب شماست؟</p>
                <p className='font-myVazirMedium desktop:text-[24px] tablet:text-[22px] text-lg mb-[14px]'>برای یافتن درمانگر مناسب خود یکی از این دو راه را انتخاب کنید:</p>
                <ul className='list-disc font-myVazirRegular desktop:text-xl pr-[20px]'>
                    <li className='mb-[14px]'>با مطالعه مشخصات تخصصی هر درمانگر و بررسی رویکردهایشان میتوانید درمانگر و مشاور مناسب خود را انتخاب کنید.</li>
                    <li>چت بات سروبات با پرسیدن یک سری از سوالات، درمانگر مناسب با شرایط شما را معرفی میکند.</li>
                </ul>
            </div>

            <div className="desktop:px-[96px] tablet:px-6 px-4 pb-[150px]">
                <div className='flex flex-row justify-between mt-[120px]'>
                    <div>
                        <h4 className='font-myPeydaSemibold text-4xl text-gray-950 mb-1'>درمانگران سرو</h4>
                        <h5 className='font-myVazirRegular text-lg text-gray-950 mb-[28px]'>درمانگران سرو از بین بهترین مشاوران و پزشکان این حوزه انتخاب شده‌اند و با رویکرد‌های ویژه و تجارب خود به صدها نفر یاری رسانده‌اند.</h5>
                    </div>
                    <img src={tree} alt="sarv" />
                </div>

                <TherapistsCategory />

                <div className="grid grid-cols-1 desktop:grid-cols-4 tablet:grid-cols-2 gap-[32px] place-items-center mt-[100px]">
                    <TherapistCard therapistName={'لیلا طهماسبی'} therapistSubHead={'متخصص اعصاب و روان - روانپزشک'} therapistImg={doctor} profession={['مشاوره فردی','مشاور ازدواج']}></TherapistCard>
                    <TherapistCard therapistName={'لیلا طهماسبی'} therapistSubHead={'متخصص اعصاب و روان - روانپزشک'} therapistImg={doctor} profession={['مشاوره فردی','مشاور ازدواج']}></TherapistCard>
                    <TherapistCard therapistName={'لیلا طهماسبی'} therapistSubHead={'متخصص اعصاب و روان - روانپزشک'} therapistImg={doctor} profession={['مشاوره فردی','مشاور ازدواج']}></TherapistCard>
                    <TherapistCard therapistName={'لیلا طهماسبی'} therapistSubHead={'متخصص اعصاب و روان - روانپزشک'} therapistImg={doctor} profession={['مشاوره فردی','مشاور ازدواج']}></TherapistCard>
                    <TherapistCard therapistName={'لیلا طهماسبی'} therapistSubHead={'متخصص اعصاب و روان - روانپزشک'} therapistImg={doctor} profession={['مشاوره فردی','مشاور ازدواج']}></TherapistCard>
                    <TherapistCard therapistName={'لیلا طهماسبی'} therapistSubHead={'متخصص اعصاب و روان - روانپزشک'} therapistImg={doctor} profession={['مشاوره فردی','مشاور ازدواج']}></TherapistCard>
                    <TherapistCard therapistName={'لیلا طهماسبی'} therapistSubHead={'متخصص اعصاب و روان - روانپزشک'} therapistImg={doctor} profession={['مشاوره فردی','مشاور ازدواج']}></TherapistCard>


                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}

export default TherapistsPage;
