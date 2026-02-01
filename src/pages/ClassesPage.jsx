import { Map } from "lucide-react";
const ClassesPage = () => {
  return (
    <>
      <section className="pt-15 p-4 grid grid-flow-col auto-rows-min gap-2">
        {Array.from({ length: 7 }).map((_, i) => (
          <article
            key={i}
            className={`relative bg-blue-800 p-4 rounded-lg shadow-md text-white xl:col-span-2`}
          >
            <header>
              <p>Wykład</p>
            </header>
            <div className="flex items-center flex-wrap bg-white text-black p-3 rounded-md mt-2 h-[80%]">
              <div>
                <p className="font-light text-gray">Za 15 min</p>
                <p className="font-medium">Algebra</p>
                <p className="font-light text-gray">Sala 101, Budynek C</p>
              </div>

              <button
                className={`ml-auto w-min h-min bg-blue-800 p-2 rounded-lg`}
              >
                <Map className="text-white" />
              </button>
            </div>
          </article>
        ))}
      </section>
    </>
  );
};
export default ClassesPage;
