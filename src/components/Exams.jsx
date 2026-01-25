import { Calendar } from "lucide-react";
import { useMenu } from "../hooks/MenuContext";
const Exams = () => {
  const { isMenuOpen } = useMenu();
  return (
    <>
      <article
        className={`bg-white p-4 rounded-lg shadow-md h-min ${isMenuOpen ? "min-md:col-span-2" : "min-[540px]:col-span-2"} `}
      >
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
              <p className="p-2">01.02: Programowanie obiektowe (Projekt)</p>
            </li>
          </div>
        </ul>
      </article>
    </>
  );
};
export default Exams;
