import { ReactComponent as Hexa } from "../assets/icons/hexagon.svg";
import { ReactComponent as Music } from "../assets/icons/music.svg";
import { ReactComponent as Clipboard } from "../assets/icons/clipboard.svg";
import { ReactComponent as Calendar } from "../assets/icons/calendar.svg";
import { ReactComponent as Message } from "../assets/icons/message-circle.svg";
import { ReactComponent as Home } from "../assets/icons/home.svg";
import { NavLink } from "react-router-dom";

// Accept collapsed as prop
export default function ProfileRouteSelect({ collapsed }: { collapsed: boolean }) {
  return (
    <div className="flex flex-col justify-between font-myVazirMedium text-lg bg-primary-100">
      <ul className="space-y-[20px] text-primary-600">
        {[
          { to: "/dashboard", icon: <Home />, label: "صفحه اصلی" },
          { to: "/searchEngine", icon: <Clipboard />, label: "تست ها" },
        ].map((item, idx) => (
          <li key={idx}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-2 py-[9px] h-10 rounded-[4px] transition-colors duration-200
                ${collapsed ? "justify-center w-[44px]" : "pr-[6px] w-[290px]"}
                ${isActive ? "border-primary-500 bg-primary-50" : " hover:bg-primary-50"}`
              }
            >
              {item.icon}
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
