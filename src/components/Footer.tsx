import React from 'react';
import sarv from "../assets/icons/Sarv.svg";
import CustomButton from './CustomeButton';
import menu from "../assets/icons/menu.svg";
import map from "../assets/icons/map-pin.svg";
import mail from "../assets/icons/mail.svg";
import phone from "../assets/icons/phone.svg";
import facebook from "../assets/icons/facebook.svg";
import linkedin from "../assets/icons/linkedin.svg";
import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";
import { useNavigate } from 'react-router-dom';


function Footer() {

    const navigate = useNavigate();

    return (
        <footer className="w-full bg-success-50 text-primary-700">
            {/* Mobile & Tablet Footer (Merged) */}
            <div className="block desktop:hidden text-primary-700">
                <div className="flex flex-col tablet:flex-row gap-8 items-start tablet:justify-between container tablet:px-6 px-4 pt-[30px] tablet:pb-8 pb-[47px]">
                    {/* Left section: Logo + Contact + Socials */}
                    <div className="w-full tablet:w-1/2">
                        <img src={sarv} alt="Sarv Logo" className="h-10" />
                        <p className="font-myVazirRegular text-base text-right mt-[30px] leading-relaxed">
                            زیستن نیک را با مشاور هوشمند برای همه‌ی ایرانیان سرتاسر جهان فراهم کرده‌ایم.
                        </p>

                        <div className="mt-[30px] tablet:text-sm text-xs">
                            <div className="flex items-center gap-2 mb-3">
                                <img src={phone} alt="phone" />
                                <span className="font-myVazirRegular">۰۲۱-۱۲۳۴۵۶۷۸</span>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                                <img src={mail} alt="mail" />
                                <span className="font-myVazirRegular">Sarv@onlinetherapy.com</span>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                                <img src={map} alt="map" />
                                <span className="font-myVazirRegular">آدرس: تهران، خیابان تهران، کوچه تهران، پلاک اول</span>
                            </div>
                        </div>

                        <div className='flex flex-row gap-3'>
                            <div className='bg-primary-300 rounded-full p-2 w-10 h-10 flex items-center justify-center'>
                                <img src={facebook} alt="facebook" className='w-5 h-5 object-contain' />
                            </div>
                            <div className='bg-primary-300 rounded-full p-2 w-10 h-10 flex items-center justify-center'>
                                <img src={instagram} alt="instagram" className='w-5 h-5 object-contain' />
                            </div>
                            <div className='bg-primary-300 rounded-full p-2 w-10 h-10 flex items-center justify-center'>
                                <img src={twitter} alt="twitter" className='w-5 h-5 object-contain' />
                            </div>
                            <div className='bg-primary-300 rounded-full p-2 w-10 h-10 flex items-center justify-center'>
                                <img src={linkedin} alt="linkedin" className='w-5 h-5 object-contain' />
                            </div>
                        </div>

                    </div>

                    {/* Right section: Grid of links */}
                    <div className="w-full tablet:w-1/2 grid grid-cols-2 gap-[30px] text-right  tablet:mt-[83px] ">
                        <div>
                            <h3 className="text-base tablet:text-lg font-myPeydaMedium mb-3">آزمون ها</h3>
                            <ul className="space-y-2 font-myVazirRegular text-base">
                                    <li>
                                        <button onClick={() => navigate("/tests/bdi")}>آزمون BDI</button>
                                    </li>
                                    <li>
                                        <button onClick={() => navigate("/tests/bai")}>آزمون BAI</button>
                                    </li>
                                    <li>
                                        <button onClick={() => navigate("/tests/ghq")}>آزمون GHQ</button>
                                    </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-base tablet:text-lg font-myPeydaMedium mb-3">لینک‌های مهم</h3>
                            <ul className="space-y-2 font-myVazirRegular text-base">
                                <li>تماس با ما</li>
                                <li>درباره ما</li>
                                <li>موقعیت‌های شغلی</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>


            {/* Desktop Footer: 364px height */}
            <div className="hidden desktop:block h-[364px]">
                <div className="container mx-auto px-24 pt-10 pb-[42px] flex flex-col h-full">
                    <div className="flex justify-between items-start">
                        <div className="max-w-[624px] h-[282px]">
                            <img src={sarv} alt="Sarv Logo" className="h-12 mb-[30px]" />
                            <p className="desktop:text-lg font-myVazirRegular mb-[30px]">زیستن نیک  را با مشاور هوشمند برای همه ی ایرانیان سرتاسر جهان فراهم کرده ایم.</p>

                            <div className="flex items-start gap-3 mb-3">
                                <img src={phone} alt="phone" />
                                <span className='font-myVazirRegular text-sm'>۰۲۱-۱۲۳۴۵۶۷۸</span>
                            </div>



                            <div className="flex items-center gap-3 mb-3">
                                <img src={mail} alt="mail" />
                                <span className='font-myVazirRegular text-sm'>Sarv@onlinetherapy.com</span>
                            </div>


                            <div className="flex items-center gap-3 mb-[30px]">
                                <img src={map} alt="map" />
                                <span className='font-myVazirRegular text-sm'>آدرس: تهران، خیابان تهران، کوچه تهران، پلاک اول </span>
                            </div>

                            <div className='flex flex-row gap-3'>
                                <div className='bg-primary-300 rounded-full p-2 w-10 h-10 flex items-center justify-center'>
                                    <img src={facebook} alt="facebook" className='w-5 h-5 object-contain' />
                                </div>
                                <div className='bg-primary-300 rounded-full p-2 w-10 h-10 flex items-center justify-center'>
                                    <img src={instagram} alt="instagram" className='w-5 h-5 object-contain' />
                                </div>
                                <div className='bg-primary-300 rounded-full p-2 w-10 h-10 flex items-center justify-center'>
                                    <img src={twitter} alt="twitter" className='w-5 h-5 object-contain' />
                                </div>
                                <div className='bg-primary-300 rounded-full p-2 w-10 h-10 flex items-center justify-center'>
                                    <img src={linkedin} alt="linkedin" className='w-5 h-5 object-contain' />
                                </div>
                            </div>


                        </div>

                        <div className="flex flex-row gap-[30px] pt-[103.5px]">

                            <div className=''>
                                <h3 className="text-[20px] font-myPeydaMedium mb-4"> آزمون ها</h3>
                                <ul className="space-y-3  font-myVazirRegular text-lg">
                                    <li>
                                        <button onClick={() => navigate("/tests/bdi")}>آزمون BDI</button>
                                    </li>
                                    <li>
                                        <button onClick={() => navigate("/tests/bai")}>آزمون BAI</button>
                                    </li>
                                    <li>
                                        <button onClick={() => navigate("/tests/ghq")}>آزمون GHQ</button>
                                    </li>
                                </ul>
                            </div>

                            <div className=''>
                                <h3 className="text-[20px] font-myPeydaMedium mb-4">لینکهای مهم</h3>
                                <ul className="space-y-3 font-myVazirRegular text-lg">
                                    <li>تماس با ما</li>
                                    <li>درباره  ما</li>
                                    <li>موقعیت های شغلی</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;