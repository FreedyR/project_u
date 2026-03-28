import {
  Hammer,
  Speech,
  BellDot,
  ShoppingCart,
  CheckCircle,
  Check,
  ListCheck,
} from "lucide-react";
const LectureRegisterPage = () => {
  return (
    <>
      <section className="pt-20 p-4">
        <article>
          <nav>
            <ul className="flex flex-wrap gap-4 justify-center">
              <li className="relative bg-white w-42 rounded-full p-2 text-center shadow border-1 border-blue-300">
                <figure className="flex justify-center gap-2">
                  <Hammer className="absolute left-3" />
                  <figcaption>Przedmiot</figcaption>
                </figure>
              </li>
              <li className="relative bg-white w-42 rounded-full p-2 text-center shadow">
                <figure className="flex justify-center gap-2">
                  <Speech className="absolute left-3" />
                  <figcaption>Lektorat</figcaption>
                </figure>
              </li>
              <li className="relative bg-white w-42 rounded-full p-2 text-center shadow">
                <figure className="flex justify-center gap-2">
                  <BellDot className="absolute left-3" />
                  <figcaption>Wizyta</figcaption>
                </figure>
              </li>
            </ul>
          </nav>
        </article>
        <article className="flex justify-center">
          <div className="absolute translate-y-5 rounded bg-white shadow p-2">
            Łączna ilość żetonów: 2
          </div>
        </article>
        <section className="flex flex-col gap-5 translate-y-20 md:ms-15 md:me-15 ">
          <article className="flex bg-white rounded-[0.3rem] w-full p-4 items-center">
            <div className="flex-1">
              <p>Fizyka 1 | B18</p>
              <p>Różana 1</p>
            </div>
            <div className="flex flex-1 gap-4 ms-auto me-auto">
              <p>8:00 - 9:30</p>
              <p>Krzysztof Michalski</p>
            </div>
            <button className="flex gap-2 items-center">
              <ShoppingCart />
              Zapisz się
            </button>
          </article>
          <article className="flex bg-white rounded-[0.3rem] w-full p-4 items-center border-2 border-green-300">
            <div className="flex-1">
              <p>Analiza Matematyczna 1 | B18</p>
              <p>Kwiatowa 2</p>
            </div>
            <div className="flex flex-1 gap-4 ms-auto me-auto">
              <p>13:15 - 14:45</p>
              <p>Adam Boch</p>
            </div>
            <button className="flex gap-2 items-center">
              <Check className="text-[green]" />
              Zapisano się
            </button>
          </article>
        </section>
        <div className="fixed flex justify-center items-center right-1 bottom-1 bg-white w-10 h-10 rounded-full">
          <button>
            <ListCheck />
          </button>
        </div>
      </section>
    </>
  );
};
export default LectureRegisterPage;
