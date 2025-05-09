
interface ButtonProps {
    text: string | React.ReactNode;
    iconsrc?: string | null;
    className: string;
    children?: React.ReactNode;
    handleOnClick?: () => void;
    type?: "button" | "submit";
    disabled?: boolean;
  }
  
  const CustomButton = ({
    text,
    iconsrc,
    className = "",
    handleOnClick,
    children,
    type = "button",
    disabled = false,
  }:ButtonProps) => {
    const baseStyle =
      " flex align-middle items-center justify-center gap-2 rounded-full text-[14px] leading-6 text-center font-myVazirMedium";
    
    return (
      <button disabled={disabled}  type={type} onClick={handleOnClick} className={`${baseStyle} ${className}`} dir="rtl">
        {children}
        {text && <span className="text-center tracking-tight190">{text}</span>}
        {iconsrc && <img src={iconsrc} alt="logo" className="h-5 w-5" />}
      </button>
    );
  };
  
  export default CustomButton;
  