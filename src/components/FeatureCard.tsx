// FeatureCard.jsx
import usersGreen from "../assets/icons/usersGreen.svg";
import cardBack from "../assets/icons/featureCardsPattern.svg"

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: string;
}
function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="relative bg-primary-600 p-5 border border-secondary-100 rounded-3xl flex-shrink-0 min-h-[84px] desktop:w-[396px] tablet:w-[332px] w-[288px] flex flex-col text-center text-Gray-950">
      {/* <img src={cardBack} alt="" className='absolute -top-2 right-0 h-full' /> */}
      <h4 className="desktop:text-[20px] tablet:text-[18px] text-[16px] font-myPeydaMedium mb-2 text-Gray-50">{title}</h4>
      <p className="desktop:text-base tablet:text-base text-sm font-myVazirRegular text-Gray-50">{description}</p>
    </div>
  );
}

export default FeatureCard;