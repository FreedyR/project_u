import { BellDot } from "lucide-react";
const Annoucments = () => {
  return (
    <>
      <article className="bg-white p-4 rounded-lg shadow-md">
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
              <p className="p-2">Rektorat: Dodatkowe dni wolne 09.05-12.05</p>
            </li>
          </div>
        </ul>
      </article>
    </>
  );
};
export default Annoucments;
