import arrow from "../assets/icons/arrow-left.svg"

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

function HowWorksCard({ title, description, icon }: ServiceCardProps) {
  return (

    <div className="relative bg-secondary-100 text-center pt-4 px-[20px] pb-[28px] border border-secondary-200 rounded-3xl w-full flex-1 min-h-[118px] flex flex-col text-Gray-950">

        <h4 className="text-center desktop:text-[20px] tablet:text-[18px] text-[16px] font-myPeydaMedium text-Gray-950">{title}</h4>


      <p className="desktop:text-sm tablet:text-sm text-xs font-myVazirRegular mt-[10px] text-Gray-950">{description}</p>

    </div>
  );
}

export default HowWorksCard;
