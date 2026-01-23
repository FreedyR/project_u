import { Map } from "lucide-react";
const Classes = () => {
  return (
    <>
      <article className="bg-blue-800 p-4 rounded-lg shadow-md text-white xl:col-span-2 h-full">
        <header>
          <p>Najbliższe zajęcia</p>
        </header>
        <div className="relative flex items-center  flex-wrap bg-white text-black p-3 rounded-md mt-2 h-[80%]">
          <div>
            <p className="font-light text-gray">Za 15 min</p>
            <p className="font-medium">Matematyka 1</p>
            <p className="font-light text-gray">Sala 101, Budynek C</p>
          </div>

          <button className="ml-auto w-min h-min bg-blue-800 p-2 rounded-lg">
            <Map className="text-white" />
          </button>
        </div>
      </article>
    </>
  );
};
export default Classes;
