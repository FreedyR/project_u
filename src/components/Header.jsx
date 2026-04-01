import { Home, Menu } from "lucide-react";
import Man from "../assets/man.png";
import { useMenu } from "../hooks/MenuContext";
import Logout from "./Logout";
import { useEffect, useState } from "react";
import { useLocationName } from "../hooks/LocationContext";
import Category from "../misc/CategoryNav";

const Header = () => {
  const { toggleMenu, isMenuOpen } = useMenu();
  const { location } = useLocationName();
  const { setLocation } = useLocationName();
  const [Icon, label] = Category["/"];
  useEffect(() => {
    setLocation({
      name: label,
      icon: <Icon />,
    });
  }, [setLocation]);
  return (
    <>
      <header className="fixed flex w-full gap-2 p-2 z-2 max-sm:bg-[#ebf2f2]">
        <section className="flex justify-items-center gap-4">
          <button
            className={`${isMenuOpen ? "hidden" : "relative"} z-3`}
            onClick={toggleMenu}
          >
            <Menu />
          </button>
          <h2 className="text-lg font-bold  gap-2 flex items-center">
            {location.icon}
            {location.name}
          </h2>
        </section>
        <figure className="relative ml-auto flex gap-1 items-center mr-2">
          <img className="w-10 rounded-full shadow-md" src={Man} />
          <figcaption className="text-sm text-gray-500 flex items-center">
            Witaj, Adam! (s120334)
          </figcaption>
          <div className="h-full flex">
            <Logout />
          </div>
        </figure>
      </header>
    </>
  );
};
export default Header;
