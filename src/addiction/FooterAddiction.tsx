import mail from "../assets/icons/mail.svg";
import phone from "../assets/icons/phone.svg";
import facebook from "../assets/icons/facebook.svg";
import linkedin from "../assets/icons/linkedin.svg";
import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";

export default function FooterAddiction() {
    return (
        <footer className="bg-gray-100 text-gray-700 py-12 px-6 md:px-24">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">

                {/* برند و توضیح کوتاه */}
                <div className="md:w-1/3">
                    <h2 className="text-2xl font-myPeydaSemibold mb-3 text-teal-600">جوی</h2>
                    <p className="text-gray-600 leading-relaxed">
                        جریان تازه‌ی زندگی — همراهی و حمایت در مسیر بهبود سلامت روان و کیفیت زندگی.
                    </p>
                </div>

                {/* لینک‌های سریع */}
                <div className="md:w-1/3 grid grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-semibold mb-3 font-myVazirSemibold">لینک‌ها</h3>
                        <ul className="space-y-2 text-gray-600 font-myVazirRegular">
                            <li><a href="/" className="hover:text-teal-600 transition">خانه</a></li>
                            <li><a href="/about" className="hover:text-teal-600 transition">درباره ما</a></li>
                            <li><a href="/tests" className="hover:text-teal-600 transition">تست‌ها</a></li>
                            <li><a href="/articles" className="hover:text-teal-600 transition">مقالات</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-3 font-myVazirSemibold">تماس</h3>
                        <ul className="space-y-2 text-gray-600 font-myVazirRegular">
                            <li>ایمیل: <a href="mailto:info@joyplatform.ir" className="hover:text-teal-600 transition">info@joyplatform.ir</a></li>
                            <li>تلفن: <a href="tel:+982112345678" className="hover:text-teal-600 transition">+98 21 1234 5678</a></li>
                            <li>آدرس: تهران، خیابان مثال، پلاک ۱۲۳</li>
                        </ul>
                    </div>
                </div>

                {/* شبکه‌های اجتماعی */}
                <div className="md:w-1/3">
                    <h3 className="font-semibold mb-3 font-myVazirSemibold">ما را دنبال کنید</h3>
                    <div className="flex gap-6 text-gray-700 text-xl">

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
            </div>

            {/* کپی‌رایت */}
            <div className="mt-12 border-t border-gray-300 pt-6 text-center text-gray-500 text-sm">
                © ۲۰۲۵ جوی. تمامی حقوق محفوظ است.
            </div>
        </footer>
    );
}
