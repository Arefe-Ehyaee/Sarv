import { NavLink, useNavigate } from "react-router-dom";
import svgSmall from "../assets/icons/smalltreeBg.svg";
import { ReactComponent as Left } from "../assets/icons/chevron-left.svg";
import { ReactComponent as Right } from "../assets/icons/chevron-right.svg";

function TestTemplate() {

    const navigate = useNavigate();

    const options = [
        { id: 1, text: "خیلی خوب" },
        { id: 2, text: "خوب" },
        { id: 3, text: "متوسط" },
        { id: 4, text: "بد" },

    ];


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
                    <button className="flex flex-row gap-[10px] items-center mb-[30px]" onClick={() => navigate('/')}>
                        <Right></Right>
                        <span className="font-myVazirRegular text-Gray-600 desktop:text-[18px] tablet:text-[18px] text-[14px]">خروج از آزمون</span>
                    </button>


                    <div className='flex flex-col justify-center items-center'>


                        <div className='relative z-10 bg-background-BG w-full px-[22px] py-[28px] rounded-[20px] mx-[96px]'>
                            <h5 className='font-myPeydaSemibold desktop:text- tablet:text-[32px] text-[28px]'>عنوان تست</h5>
                            <p>لطفا ً این قسمت را به دقت مطالعه کنید :</p>
                            <p>
                                می خواهیم درباره کسالت و ناراحتی های پزشکی و اینکه سلامت عمومی شما در طی یکماه گذشته تا به امروز چگونه بوده است اطلاعاتی بدست آوریم...
                            </p>
                            <div className="mt-6 flex flex-col gap-3">
                                {options.map((option) => (
                                    <label
                                        key={option.id}
                                        className="flex items-center gap-2 cursor-pointer text-Gray-800"
                                    >
                                        <input
                                            type="radio"
                                            name="testOption"
                                            value={option.id}
                                            className="accent-primary-600"
                                        />
                                        <span className="font-myVazirRegular text-[16px]">{option.text}</span>
                                    </label>
                                ))}
                            </div>

                        </div>



                    </div>

                    <div className='flex flex-row items-center justify-between mt-[30px] gap-4 z-10'>
                        {/* Previous Question Button */}
                        <div className="flex flex-row justify-end items-center">
                            <button className='flex flex-row justify-center items-center text-primary-600 rounded-[4px]  ml-[6px] bg-primary-200 border border-primary-300 w-[42px] h-[42px]'>
                                <Right ></Right>
                            </button>
                            <span className='font-myVazirRegular desktop:text-lg tablet:text-lg text-base text-Gray-600'>سوال قبل</span>

                        </div>

                        {/* Next Question Button */}

                        <div className="flex flex-row justify-end items-center">
                            <span className='font-myVazirRegular desktop:text-lg tablet:text-lg text-base text-Gray-600'>سوال بعد</span>
                            <button className='flex flex-row justify-center items-center mr-[6px] text-primary-600 rounded-[4px] bg-primary-200 border border-primary-300 w-[42px] h-[42px]'>
                                <Left className="w-3 h-3"/>
                            </button>
                        </div>

                    </div>

                </div>



            </div>
        </div>
    )
}

export default TestTemplate;
