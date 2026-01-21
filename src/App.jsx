import {
  House,
  Calendar,
  GraduationCap,
  PencilLine,
  BanknoteArrowDown,
  Map,
  Menu,
  LogOut,
} from "lucide-react";
import "./App.css";
import man from "./man.png";
function App() {
  const Category = {
    cockpit: [House, "Kokpit"],
    classes: [Calendar, "Zajęcia"],
    grades: [GraduationCap, "Oceny i ECTS"],
    registration: [PencilLine, "Rejestracja"],
    payments: [BanknoteArrowDown, "Płatności"],
    campusMap: [Map, "Mapa Kampusu"],
  };
  return (
    <>
      <aside className="absolute w-64  h-full pt-5">
        <nav className="h-full bg-[#fefefe] p-8 rounded-tr-lg">
          <Menu className="absolute right-5 translate-y-[-1rem]" />
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
      <main className="h-full ml-64 p-8">
        <header>
          <h2 className="text-xl font-bold mb-4">Kokpit</h2>
        </header>
        <figure className="absolute top-6 right-3 flex gap-2">
          <img className=" w-10 rounded-full shadow-md" src={man} />
          <figcaption className="text-sm text-gray-500 mt-2">
            Witaj, Adam! (s120334)
          </figcaption>
          <button className="ml-2">
            <LogOut />
          </button>
        </figure>
        <section className="mt-4 bg-blue-800 p-4 rounded-lg shadow-md text-white">
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
        </section>

        <section className="bg-white p-4 rounded-lg shadow-md mt-8">
          <header>Zadania</header>
          <ul className="flex flex-col gap-3">
            <li className="relative bg-gray-200 rounded-full shadow-md">
              <div className="relative p-2 bg-[red] w-[80%] rounded-full text-white">
                <p className="translate-y-[-2px] text-sm">
                  Jutro: Oddanie projektu z programowania [23:59]
                </p>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
