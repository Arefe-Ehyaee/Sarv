
import { NavLink, useNavigate } from "react-router-dom";
import svgSmall from "../assets/icons/smalltreeBg.svg";
import right from "../assets/icons/chevron-right.svg"
import { ReactComponent as Left } from "../assets/icons/chevron-left.svg";
import { tests } from "./tests";

function TestLanding() {
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
                    <button className="flex flex-row gap-[10px] items-center mb-[30px]" onClick={() => navigate('/')}>
                        <img src={right} alt="" />
                        <span className="font-myVazirRegular text-Gray-600 desktop:text-[18px] tablet:text-[18px] text-[14px]">خروج از آزمون</span>
                    </button>


                    <div className='flex flex-col justify-center items-center'>


                        <div className='relative z-10 bg-background-BG w-full px-[22px] py-[28px] rounded-[20px] mx-[96px]'>

                            <div>
                                {tests.map((test) => (
                                    <div
                                        key={test.id}
                                        className="p-6 flex flex-col gap-2"
                                    >
                                        <h5 className='flex flex-row font-myPeydaSemibold desktop:text- tablet:text-[32px] text-[28px] justify-start'>
                                            {test.title}
                                        </h5>

                                        <p>{test.description}</p>

                                    </div>
                                ))}
                            </div>

                        </div>



                    </div>

                    <div className='flex flex-row items-center justify-end mt-[30px]'>
                        <span className='font-myVazirRegular desktop:text-lg tablet:text-lg text-base text-Gray-600'>ادامه</span>
                        <button onClick={() => navigate('/test/:id')} className='flex flex-row justify-center items-center mr-[6px] text-primary-600 rounded-[4px] bg-primary-200 border border-primary-300 w-[42px] h-[42px] z-10'>
                            <Left></Left>
                        </button>
                    </div>
                </div>



            </div>
        </div>
    )
}


export default TestLanding;
