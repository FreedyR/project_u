import {
  University,
  Hotel,
  Check,
  BanknoteArrowUp,
  LoaderCircle,
  CircleUser,
} from "lucide-react";
import { useLocationName } from "../hooks/LocationContext";
import Category from "../misc/CategoryNav";
import { useEffect } from "react";

const PaymentPage = () => {
  const { setLocation } = useLocationName();
  const [Icon, label] = Category["/payments"];
  useEffect(() => {
    setLocation({
      name: label,
      icon: <Icon />,
    });
    return () => setLocation({ name: "", icon: null });
  }, [setLocation]);
  return (
    <>
      <section className="pt-20 p-4 flex flex-col flex-wrap">
        <article>
          <nav>
            <ul className="flex flex-wrap gap-4 justify-center">
              <li className="relative bg-white w-42 rounded-full p-2 text-center shadow border-1 border-blue-300">
                <figure className="flex justify-center gap-2">
                  <Hotel className="absolute left-3" />
                  <figcaption>Akademik</figcaption>
                </figure>
              </li>
              <li className="relative bg-white w-42 rounded-full p-2 text-center shadow">
                <figure className="flex justify-center gap-2">
                  <University className="absolute left-3" />
                  <figcaption>Uniwersytet</figcaption>
                </figure>
              </li>
            </ul>
          </nav>
        </article>
        <article className="flex gap-3 justify-center text-center">
          <div className="translate-y-5 rounded bg-white w-30 shadow p-2">
            Opłaty
          </div>
          <div className="translate-y-5 rounded bg-white w-30 shadow p-2">
            Historia
          </div>
        </article>
        <section className="flex translate-y-10 md:ms-15 md:me-15 ">
          <article className="relative flex flex-col gap-5 w-full">
            <section className="flex bg-white rounded-[0.3rem] p-4">
              <div className="flex-1">
                <p>DS 21</p>
                <p>Różana 1</p>
              </div>
              <div className="flex flex-1 items-center ms-auto me-auto translate-x-[-3.1rem]">
                <p>10.03.2026</p>
              </div>
              <button className="flex gap-2 items-center">
                <BanknoteArrowUp />
                Opłać
              </button>
            </section>

            <section className="border-1 border-[orange] flex bg-white rounded-[0.3rem] p-4">
              <div className="flex-1">
                <p>DS 21</p>
                <p>Różana 1</p>
              </div>
              <div className="flex  flex-1 items-center ms-auto me-auto">
                <p>10.02.2026</p>
              </div>
              <div className="flex gap-2 items-center text-end">
                <LoaderCircle className="text-[orange]" />
                <p className="w-min md:w-max">Rozliczanie płatności</p>
              </div>
            </section>
            <section className="border-1 border-[green] flex bg-white rounded-[0.3rem]  p-4">
              <div className="flex-1">
                <p>DS 21</p>
                <p>Różana 1</p>
              </div>
              <div className="flex  flex-1 items-center ms-auto me-auto translate-x-[-2.3rem]">
                <p>10.01.2026</p>
              </div>
              <div className="flex gap-2 items-center">
                <Check className="text-[green]" />
                Rozliczono
              </div>
            </section>
          </article>
        </section>
      </section>
    </>
  );
};

export default PaymentPage;
