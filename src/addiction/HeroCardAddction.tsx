import React from "react";

interface CardProps {
  icon: string;
  title: string;
  iconBgColor?: string;
  bgColor?: string;
  wavePattern?: string;
  width?: string;   // e.g. "w-48", "w-full"
  height?: string;  // e.g. "h-16", "h-24"
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  icon,
  title,
  iconBgColor = "#B5EBEA",
  bgColor = "#B5EBEA",
  wavePattern,
  width = "w-full",
  height = "h-auto",
  onClick,
}) => {
  return (
    <div
      className={`${width} ${height} border-[0.6px] shadow-md cursor-pointer bg-white text-black rounded-lg hover:shadow-lg transition relative flex items-center p-2 font-myYekanMedium`}
                style={{ backgroundColor: bgColor }}
      onClick={onClick}
    >
      {wavePattern && (
        <img
          src={wavePattern}
          alt="wave pattern"
          className="absolute top-0 left-0 w-16 h-16 -translate-y-5 opacity-15"
        />
      )}
      <div className="flex items-center w-full z-10">
        <div
          className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full"
          style={{ backgroundColor: iconBgColor }}
        >
          <img src={icon} alt={title} className="w-6 h-6" />
        </div>
        <span className="mr-1 truncate">{title}</span>
      </div>
    </div>
  );
};

export default Card;
