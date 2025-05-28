import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import sarv from "../assets/icons/Sarv.svg";

interface Props {
    phoneNumber: string;
}

const VerificationCodeSchema = z.object({
    code: z
        .string({ required_error: "کد را وارد کنید" })
        .regex(/^\d{5}$/, { message: "کد تأیید باید فقط شامل ۵ رقم باشد" }),
});

type VerificationCodeData = z.infer<typeof VerificationCodeSchema>;

export default function VerificationCode({ phoneNumber }: Props) {
    const [codeInputs, setCodeInputs] = useState<string[]>(Array(5).fill(""));
    const [timer, setTimer] = useState(120);
    const [isResendDisabled, setIsResendDisabled] = useState(true);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<VerificationCodeData>({ resolver: zodResolver(VerificationCodeSchema) });

    const onSubmit = (data: VerificationCodeData) => {
        console.log("Code submitted:", data.code);
    };

    const handleInputChange = (value: string, index: number) => {
        if (value.length > 1) return;
        const updatedInputs = [...codeInputs];
        updatedInputs[index] = value;
        setCodeInputs(updatedInputs);
        setValue("code", updatedInputs.join(""));
        if (value && index < 4) {
            const nextInput = document.getElementById(`code-input-${index + 1}`);
            nextInput?.focus();
        }
    };

    useEffect(() => {
        if (timer > 0) {
            const countdown = setInterval(() => setTimer(prev => prev - 1), 1000);
            return () => clearInterval(countdown);
        } else {
            setIsResendDisabled(false);
        }
    }, [timer]);

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="text-center mb-5">
                <div className="inline-flex items-center mb-4">
                    <img src={sarv} alt="sarv" />
                </div>
                <p className="text-gray-950 desktop:text-lg tablet:text-lg text-base font-myVazirFaNumRegular">کد ارسال شده به {phoneNumber} را وارد کنید</p>
            </div>

                        <div className="flex justify-center gap-3 text-sm mt-4 mb-1 font-myVazirFaNumRegular">
                <button
                    type="button"
                    className={`${isResendDisabled ? "text-Gray-600" : "text-primary-600"}`}
                    onClick={() => {
                        setTimer(120);
                        setIsResendDisabled(true);
                    }}
                    disabled={isResendDisabled}
                >
                    ارسال مجدد کد:
                </button>
                <span className="text-Gray-600 font-myYekanFaNumRegular">{formatTime(timer)}</span>
            </div>

            <div className="flex gap-2 justify-center mb-4 ">
                {codeInputs.map((val, index) => (
                    <input
                        key={index}
                        id={`code-input-${index}`}
                        type="text"
                        maxLength={1}
                        value={val}
                        onChange={(e) => handleInputChange(e.target.value, index)}
                        className="w-10 h-10 text-center border border-gray-300 rounded-md font-myYekanFaNumRegular text-lg"
                    />
                ))}
            </div>
            {errors.code && <p className="text-red-500 text-center text-sm mt-2 mb-2 font-myVazirRegular">{errors.code.message}</p>}


            <button
                type="submit"
                className="desktop:w-[210px] flex justify-center items-center mx-auto  h-[42px] bg-primary-700 hover:bg-primary-500 text-white rounded-xl font-myVazirRegular transition-colors"
            >
                تایید کد
            </button>
                        <button
                type="submit"
                className="mx-auto flex justify-center mt-3 h-[42px] text-primary-700 hover:text-primary-500  font-myVazirRegular transition-colors"
            >
                 بازگشت
            </button>
        </form>
    );
}
