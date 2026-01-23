import { LogOut } from "lucide-react";
import Man from "../man.png";
const Header = () => {
  return (
    <>
      <header className="absolute flex w-full p-2">
        <h2 className="translate-x-65 text-xl font-bold">Kokpit</h2>
        <figure className="ml-auto flex gap-2">
          <img className="w-10 rounded-full shadow-md" src={Man} />
          <figcaption className="text-sm text-gray-500 flex items-center">
            Witaj, Adam! (s120334)
          </figcaption>
          <button className="ml-2">
            <LogOut />
          </button>
        </figure>
      </header>
    </>
  );
};
export default Header;
