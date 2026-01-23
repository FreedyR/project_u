import { Map } from "lucide-react";
const Classes = () => {
  return (
    <>
      <article className="bg-blue-800 p-4 rounded-lg shadow-md text-white">
        <header>
          <p>Najbliższe zajęcia</p>
        </header>
        <div className="relative flex flex-col bg-white text-black p-3 rounded-md mt-2 ">
          <p className="font-light text-gray">Za 15 min</p>
          <p className="font-medium">Matematyka 1</p>
          <p className="font-light text-gray">Sala 101, Budynek C</p>

          <button className="absolute right-5 top-[30%] bg-blue-800 p-2 rounded-lg">
            <Map className="text-white" />
          </button>
        </div>
      </article>
    </>
  );
};
export default Classes;
