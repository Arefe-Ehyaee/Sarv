import { ReactComponent as Hexa } from "../assets/icons//hexagon.svg";
import { ReactComponent as Music } from "../assets/icons/music.svg";
import { ReactComponent as Clipboard } from "../assets/icons/clipboard.svg";
import { ReactComponent as Calendar } from "../assets/icons/calendar.svg";
import { ReactComponent as Message } from "../assets/icons/message-circle.svg";
import { NavLink } from "react-router-dom";


export default function RouteSelect() {
  return (
    <div className="flex flex-col justify-between font-myVazirMedium text-lg bg-primary-100">
      <div>
        <ul className="space-y-[20px] text-primary-600">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex flex-row items-center gap-2 py-[9px] pr-[6px] w-[290px] h-10 rounded-[4px] transition-colors duration-200 ${isActive
                  ? "border-primary-500  bg-primary-50"
                  : "border-l-4 hover:border-l-4 hover:bg-primary-50"
                }`
              }
            >
              <Message />
              <span>چت جدید</span>
            </NavLink>
          </li>


          <li>
            <NavLink
              to="/searchEngine"
              className={({ isActive }) =>
                `flex flex-row items-center gap-2 py-[9px] pr-[6px] w-[290px] h-10 rounded-[4px] transition-colors duration-200 ${isActive
                  ? "border-primary-500  bg-primary-50"
                  : "border-l-4 hover:border-l-4 hover:bg-primary-50"
                }`
              }
            >
              <Clipboard />
              <span>تست روانشناسی</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/searchEngine"
              className={({ isActive }) =>
                `flex flex-row items-center gap-2 py-[9px] pr-[6px] w-[290px] h-10 rounded-[4px] transition-colors duration-200 ${isActive
                  ? "border-primary-500  bg-primary-50"
                  : "border-l-4 hover:border-l-4 hover:bg-primary-50"
                }`
              }
            >
              <Calendar></Calendar>
              <span>جلسه با تراپیست</span>
            </NavLink>
          </li>


          <li>
            <NavLink
              to="/searchEngine"
              className={({ isActive }) =>
                `flex flex-row items-center gap-2 py-[9px] pr-[6px] w-[290px] h-10 rounded-[4px] transition-colors duration-200 ${isActive
                  ? "border-primary-500  bg-primary-50"
                  : "border-l-4 hover:border-l-4 hover:bg-primary-50"
                }`
              }
            >
              <Music></Music>
              <span>موسیقی</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/searchEngine"
              className={({ isActive }) =>
                `flex flex-row items-center gap-2 py-[9px] pr-[6px] w-[290px] h-10 rounded-[4px] transition-colors duration-200 ${isActive
                  ? "border-primary-500  bg-primary-50"
                  : "border-l-4 hover:border-l-4 hover:bg-primary-50"
                }`
              }
            >
              <Hexa></Hexa>
              <span>کارت انگیزه</span>
            </NavLink>
          </li>


        </ul>
      </div>

    </div>
  );
}
