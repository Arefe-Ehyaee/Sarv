
import sarv from "../assets/icons/Sarv.svg"
import arrow from "../assets/icons/arrow-left.svg"
interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}
function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (

    <div className="relative bg-primary-400 p-5 border border-primary-400 rounded-3xl w-full flex-1 min-h-[240px] flex flex-col text-gray-950">
      <div className="flex flex-row items-center gap-[10px]">
        <img src={icon} alt="icon" className="w-[30px] h-[30px]" />
        <h4 className="desktop:text-[32px] tablet:text-[28px] text-[22px] font-myPeydaMedium text-gray-50">{title}</h4>
      </div>

      <p className="desktop:text-base tablet:text-base text-sm font-myVazirRegular mt-[10px] text-gray-50">{description}</p>

      <button className="flex flex-row items-center gap-[10px] absolute bottom-5 left-5">
        <p className="font-myVazirMedium text-[20px] text-gray-50">شروع مسیر</p>
        <img src={arrow} alt="arrow" />
      </button>
    </div>
  );
}

export default ServiceCard;
