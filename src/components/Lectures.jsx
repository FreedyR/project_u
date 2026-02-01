import { Map } from "lucide-react";
const Lectures = () => {
  const bgColor = {
    bluebg: "bg-blue-800",
    greenbg: "bg-green-800",
    yellowbg: "bg-[#d3ce4f]",
  };
  return (
    <>
      <article
        className={`relative ${bgColor.bluebg} p-4 rounded-lg shadow-md text-white xl:col-span-2 h-full`}
      >
        <header>
          <p>Najbliższe zajęcia</p>
        </header>
        <div className="flex items-center flex-wrap bg-white text-black p-3 rounded-md mt-2 h-[80%]">
          <div>
            <p className="font-light text-gray">Za 15 min</p>
            <p className="font-medium">Matematyka 1</p>
            <p className="font-light text-gray">Sala 101, Budynek C</p>
          </div>

          <button
            className={`ml-auto w-min h-min ${bgColor.blue} p-2 rounded-lg`}
          >
            <Map className="text-white" />
          </button>
        </div>
      </article>
    </>
  );
};
export default Lectures;
