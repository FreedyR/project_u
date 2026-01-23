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
  const { toggleMenu, isMenuOpen, menuRef } = useMenu();
  if (!isMenuOpen) return null;
  return (
    <>
      <aside
        className={`${isMenuOpen ? "relative" : "hidden"} w-80 h-full pt-13 z-2 max-[785px]:fixed`}
        ref={menuRef}
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
                className={`relative flex gap-2 p-2 rounded-md ${
                  key === "cockpit" ? "bg-blue-800 text-white" : ""
                }`}
              >
                <Icon />
                <a
                  className="flex top-0 left-0 absolute w-full h-full z-2 items-center"
                  href={`#${key}`}
                >
                  <p className="translate-x-10">{label}</p>
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
