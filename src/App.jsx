import {
  House,
  Calendar,
  GraduationCap,
  PencilLine,
  BanknoteArrowDown,
  Map,
  Menu,
  LogOut,
  BellDot,
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
      <aside className="fixed w-64 h-full mt-5">
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
        <section className="grid grid-cols-3 gap-6">
          <article className="col-span-2 bg-blue-800 p-4 rounded-lg shadow-md text-white">
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

          <article className="bg-white p-4 rounded-lg shadow-md col-span-2">
            <header className="font-semibold">Najbliższe egzaminy</header>
            <ul className="flex flex-col gap-3 mt-5 align-middle w-full">
              <div className="flex gap-2 items-center">
                <Calendar></Calendar>
                <li className="relative bg-gray-200 rounded-full shadow-md w-full">
                  <p className="p-2">25.01: Algebra liniowa (Egzamin)</p>
                </li>
              </div>
              <div className="flex gap-2 items-center">
                <Calendar></Calendar>
                <li className="relative bg-gray-200 rounded-full shadow-md w-full">
                  <p className="p-2">28.01: Algebra Fizyka I (Kolokwium)</p>
                </li>
              </div>
              <div className="flex gap-2 items-center">
                <Calendar></Calendar>
                <li className="relative bg-gray-200 rounded-full shadow-md w-full">
                  <p className="p-2">
                    01.02: Programowanie obiektowe (Projekt)
                  </p>
                </li>
              </div>
            </ul>
          </article>

          <article className="bg-white p-4 rounded-lg shadow-md col-3">
            <header className="font-semibold">Ważne komunikaty</header>
            <ul className="flex flex-col gap-3 mt-5 align-middle w-full text-s">
              <div className="flex gap-2 items-center">
                <BellDot />
                <li className="relative bg-gray-200 rounded-full shadow-md w-full">
                  <p className="p-2">
                    Dziekanat: Rejestracja na semestr letni rusza
                  </p>
                </li>
              </div>
              <div className="flex gap-2 items-center">
                <BellDot />
                <li className="relative bg-gray-200 rounded-full shadow-md w-full">
                  <p className="p-2">
                    Biblioteka: Nowe podręczniki dostępne od 20 stycznia
                  </p>
                </li>
              </div>
              <div className="flex gap-2 items-center">
                <BellDot />
                <li className="relative bg-gray-200 rounded-full shadow-md w-full">
                  <p className="p-2">
                    Rektorat: Dodatkowe dni wolne 09.05-12.05
                  </p>
                </li>
              </div>
            </ul>
          </article>
        </section>
      </main>
    </>
  );
}

export default App;
