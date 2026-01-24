import {
  House,
  Calendar,
  GraduationCap,
  PencilLine,
  BanknoteArrowDown,
  Map,
  Menu,
} from "lucide-react";
import { useMenu } from "../hooks/MenuContext";
const LeftNav = () => {
  const Category = {
    cockpit: [House, "Kokpit"],
    classes: [Calendar, "Zajęcia"],
    grades: [GraduationCap, "Oceny i ECTS"],
    registration: [PencilLine, "Rejestracja"],
    payments: [BanknoteArrowDown, "Płatności"],
    campusMap: [Map, "Mapa Kampusu"],
  };
  const { toggleMenu, isMenuOpen } = useMenu();
  if (!isMenuOpen) return null;
  return (
    <>
      <aside
        className={`${isMenuOpen ? "relative" : "hidden"} w-[20rem] h-full pt-13 z-2 max-[580px]:fixed`}
      >
        <nav className="h-full bg-[#fefefe] p-8 rounded-tr-lg">
          <button
            className="absolute right-5 translate-y-[-1rem]"
            onClick={toggleMenu}
          >
            <Menu />
          </button>
          <h1 className="text-xl font-bold uppercase">Usos 3.0</h1>
          <ul className="flex flex-col gap-2 mt-8">
            {Object.entries(Category).map(([key, [Icon, label]]) => (
              <li
                key={key}
                className={`relative flex gap-2 p-5 rounded-md ${"hover" ? "hover:text-white" : ""}`}
              >
                <a
                  className={`flex gap-4 top-0 left-0 p-2 absolute w-full ${"hover" ? "hover:bg-blue-800" : ""}  ${"focus" ? "focus:bg-blue-800 focus:text-white" : ""} h-full z-2 rounded-md items-center`}
                  href={`#${key}`}
                >
                  <Icon className="z-3" />
                  <p>{label}</p>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};
export default LeftNav;
