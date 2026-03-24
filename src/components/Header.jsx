import { Menu } from "lucide-react";
import Man from "../assets/man.png";
import { useMenu } from "../hooks/MenuContext";
import Logout from "./Logout";
import { useLocation } from "react-router";
import Category from "../misc/CategoryNav";
const Header = () => {
  const { toggleMenu, isMenuOpen } = useMenu();

  const currentLocation = useLocation();
  const currentKey = currentLocation.pathname;

  const currentCategoryData = Category[currentKey];
  const CategoryIcon = currentCategoryData ? currentCategoryData[0] : null;
  const CategoryName = currentCategoryData ? currentCategoryData[1] : "";

  return (
    <>
      <header className="fixed flex w-full gap-2 p-2 z-2">
        <section className="flex justify-items-center gap-4">
          <button
            className={`${isMenuOpen ? "hidden" : "relative"} z-3`}
            onClick={toggleMenu}
          >
            <Menu />
          </button>
          <h2 className="text-xl font-bold translate-y-1 gap-2 flex items-center">
            {<CategoryIcon />}
            {CategoryName}
          </h2>
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
