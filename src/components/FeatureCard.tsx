
import usersGreen from "../assets/icons/usersGreen.svg";
interface FeatureCardProps {
title: string;
description: string;
icon?: string;
}
function FeatureCard( { title, description, icon } : FeatureCardProps) {
    return (

        <div className="bg-secondary-50 p-5 border border-secondary-100 rounded-3xl flex-1 min-h-[190px] flex flex-col text-center text-Gray-950">
        <h4 className="desktop:text-[32px] tablet:text-[28px] text-[22px] font-myPeydaMedium mb-2 text-Gray-950">{title}</h4>
        <img src={usersGreen} alt="sarv" className="w-[35px] h-[46px] mx-auto py-[10px]" />
        <p className="desktop:text-base tablet:text-base text-sm font-myVazirRegular text-Gray-950">{description}</p>
      </div>
    );
}

export default FeatureCard;
