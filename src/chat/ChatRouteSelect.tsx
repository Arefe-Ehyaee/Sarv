import { ReactComponent as Hexa } from "../assets/icons/hexagon.svg";
import { ReactComponent as Music } from "../assets/icons/music.svg";
import { ReactComponent as Clipboard } from "../assets/icons/clipboard.svg";
import { ReactComponent as Calendar } from "../assets/icons/calendar.svg";
import { ReactComponent as Message } from "../assets/icons/message-circle.svg";
import { NavLink } from "react-router-dom";

export default function ChatRouteSelect() {
const routes = [
  { to: "/dashboard/chatbot", icon: <Message />, label: "چت", disabled: false },
  { to: "/dashboard/ChatTests", icon: <Clipboard />, label: "تست‌های من", disabled: false },
  { to: "/searchEngine", icon: <Calendar />, label: "جلسه با تراپیست", disabled: true },
  { to: "/searchEngine", icon: <Music />, label: "موسیقی", disabled: true },
  { to: "/searchEngine", icon: <Hexa />, label: "کارت انگیزه", disabled: true }
];


  return (
    <div className="flex flex-col justify-between font-myVazirMedium text-lg bg-[#FFFFFF]">
      <ul className="space-y-[20px] text-primary-600">
        {routes.map((item, idx) => (
          <li key={idx}>
            {item.disabled ? (
              <div
                className="flex items-center gap-2 py-[9px] h-10 rounded-[4px] opacity-50 cursor-not-allowed pr-[6px] w-[290px]"
              >
                {item.icon}
                <span>{item.label}</span>
              </div>
            ) : (
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-2 py-[9px] h-10 rounded-[4px] transition-colors duration-200 pr-[6px] w-[280px]
                  ${isActive ? "border-primary-500 bg-[#CAE8BD]" : "hover:bg-[#CAE8BD]"}`
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
