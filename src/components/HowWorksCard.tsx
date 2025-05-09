import arrow from "../assets/icons/arrow-left.svg"

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

function HowWorksCard({ title, description, icon }: ServiceCardProps) {
  return (

    <div className="relative bg-secondary-50 pt-4 px-[20px] pb-[28px] border border-secondary-50 rounded-3xl w-full flex-1 min-h-[150px] flex flex-col text-gray-950">
      <div className="flex flex-row items-center gap-[10px]">
        <img src={icon} alt="icon" className="w-[30px] h-[30px]" />
        <h4 className="desktop:text-[32px] tablet:text-[28px] text-[22px] font-myPeydaMedium text-black">{title}</h4>
      </div>

      <p className="desktop:text-base tablet:text-base text-sm font-myVazirRegular mt-[10px] text-black">{description}</p>

    </div>
  );
}

export default HowWorksCard;
