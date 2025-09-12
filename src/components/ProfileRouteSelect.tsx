import { ReactComponent as Hexa } from "../assets/icons/hexagon.svg";
import { ReactComponent as Music } from "../assets/icons/music.svg";
import { ReactComponent as Clipboard } from "../assets/icons/clipboard.svg";
import { ReactComponent as Calendar } from "../assets/icons/calendar.svg";
import { ReactComponent as Message } from "../assets/icons/message-circle.svg";
import { ReactComponent as Home } from "../assets/icons/home.svg";
import { ReactComponent as Article } from "../assets/icons/book-open.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as Bot } from "../assets/icons/temp_preferences_custom.svg";
import sarv from "../assets/icons/tree.svg";
import { ReactComponent as Right } from "../assets/icons/chevron-right.svg";
import { ReactComponent as Left } from "../assets/icons/chevron-left.svg";


type ProfileSideNavbarProps = {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
  closeSidebar?: () => void; // Add this prop
};

// Accept collapsed as prop
export default function ProfileRouteSelect({ collapsed, setCollapsed, closeSidebar }: ProfileSideNavbarProps) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full font-myVazirRegular text-lg bg-background-BG">

      {/* Top section with bg-primary-100 */}
      <div className="h-[72px] bg-primary-200 flex items-center ">
        <div className="w-full">
          <span className="flex flex-row items-center justify-between text-primary-600 font-myPeydaRegular text-[30px] px-6 py-[14px]">
            <button className="flex flex-row items-center" onClick={() => navigate('/')}>
              <img src={sarv} alt="لوگو" className="w-[35px] h-[46px]" />
              <span className="pl-2">سرو</span>
            </button>

            <button onClick={closeSidebar} className=" text-primary-600 block desktop:hidden">
              {collapsed ? <Right className="w-6 h-6" /> : ""}
            </button>
          </span>
        </div>
      </div>

      <div className="flex-1 pt-4 px-[30px] text-lg">
        <ul className="space-y-[20px] text-Gray-900">
          {[
            { to: "/", icon: <Home />, label: "صفحه اصلی" },
            { to: "/Bot", icon: <Bot />, label: "سروبات" },
            { to: "/profile", icon: <Clipboard />, label: "آزمون‌های انجام شده" },
            // { to: "/tests", icon: <Article />, label: "مقالات من" },
            // { to: "/tests", icon: <Calendar />, label: "جلسات من" },
            // { to: "/tests", icon: <Clipboard />, label: "اطلاعات حساب کاربری" },
            // { to: "/tests", icon: <Clipboard />, label: "تنظیمات" },
          ].map((item, idx) => (
            <li key={idx}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-2 py-[9px] h-10 rounded-[4px] transition-colors duration-200 w-[240px]
                  ${isActive ? "border-primary-500 bg-primary-50" : "hover:text-primary-600 px-2"}`
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}