import { Menu } from "lucide-react";
import Man from "../man.png";
import { useMenu } from "../hooks/MenuContext";
import Logout from "./Logout";

const Header = () => {
  const { toggleMenu, isMenuOpen } = useMenu();
  return (
    <>
      <header className="absolute flex w-full p-2 ">
        <section className="flex justify-items-center gap-4">
          <button
            className={`${isMenuOpen ? "hidden" : "relative"} z-3`}
            onClick={toggleMenu}
          >
            <Menu />
          </button>
          <h2 className="text-xl font-bold translate-y-1">Kokpit</h2>
        </section>
        <figure className="ml-auto flex gap-2">
          <img className="w-10 rounded-full shadow-md" src={Man} />
          <figcaption className="text-sm text-gray-500 flex items-center">
            Witaj, Adam! (s120334)
          </figcaption>
          <Logout />
        </figure>
      </header>
    </>
  );
};
export default Header;
