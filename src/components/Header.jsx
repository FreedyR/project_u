import { LogOut, Menu } from "lucide-react";
import Man from "../man.png";
const Header = () => {
  return (
    <>
      <header className="absolute flex w-full p-2 z-2">
        <section className="flex justify-items-center gap-4">
          <Menu className="hidden" />
          <h2 className="text-xl font-bold translate-y-[-0.2rem]">Kokpit</h2>
        </section>
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
