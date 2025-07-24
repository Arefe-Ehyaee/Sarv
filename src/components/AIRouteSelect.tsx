import { ReactComponent as Hexa } from "../assets/icons/hexagon.svg";
import { ReactComponent as Music } from "../assets/icons/music.svg";
import { ReactComponent as Clipboard } from "../assets/icons/clipboard.svg";
import { ReactComponent as Calendar } from "../assets/icons/calendar.svg";
import { ReactComponent as Message } from "../assets/icons/message-circle.svg";
import { NavLink } from "react-router-dom";

export default function AIRouteSelect({ collapsed }: { collapsed: boolean }) {
  const routes = [
    { to: "/sarvBot", icon: <Message />, label: "چت جدید", disabled: false },
    { to: "/tests", icon: <Clipboard />, label: "تست روانشناسی", disabled: false },
    { to: "/searchEngine", icon: <Calendar />, label: "جلسه با تراپیست", disabled: true },
    { to: "/searchEngine", icon: <Music />, label: "موسیقی", disabled: true },
    { to: "/searchEngine", icon: <Hexa />, label: "کارت انگیزه", disabled: true }
  ];

  return (
    <div className="flex flex-col justify-between font-myVazirMedium text-lg bg-primary-200">
      <ul className="space-y-[20px] text-primary-600">
        {routes.map((item, idx) => (
          <li key={idx}>
            {item.disabled ? (
              <div
                className={`flex items-center gap-2 py-[9px] h-10 rounded-[4px] opacity-50 cursor-not-allowed
                ${collapsed ? "justify-center w-[44px]" : "pr-[6px] w-[290px]"}`}
              >
                {item.icon}
                {!collapsed && <span>{item.label}</span>}
              </div>
            ) : (
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-2 py-[9px] h-10 rounded-[4px] transition-colors duration-200
                  ${collapsed ? "justify-center w-[44px]" : "pr-[6px] w-[290px]"}
                  ${isActive ? "border-primary-500 bg-primary-50" : "hover:bg-primary-50"}`
                }
              >
                {item.icon}
                {!collapsed && <span>{item.label}</span>}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
