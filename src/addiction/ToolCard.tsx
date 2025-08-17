import { FC, ReactNode } from "react";

interface ToolCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  onClick: () => void;
  colorClass?: string;
}

const ToolCard: FC<ToolCardProps> = ({ title, description, icon, onClick, colorClass = "bg-white" }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer p-4 rounded-2xl border ${colorClass} text-black hover:shadow-sm transform transition-transform flex flex-col gap-1`}
    >
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 flex items-center justify-center bg-[#0ea5a2]/20 rounded-full">
          {icon}
        </div>
        <h3 className="text-lg font-myYekanFaNumMedium">{title}</h3>
      </div>
      <p className="text-sm opacity-90 pr-2 font-myYekanFaNumRegular">{description}</p>
    </div>
  );
};

export default ToolCard;
