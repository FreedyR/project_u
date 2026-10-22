import { Hammer, Speech, BellDot, ListCheck } from "lucide-react";
import { useLocationName } from "../hooks/LocationContext";
import Category from "../misc/CategoryNav";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client/react";
import { GET_LECTURES } from "../graphql/queries";
import SignUpButton from "../components/SignUpButton";

const LectureRegisterPage = () => {
  const { setLocation } = useLocationName();
  const [Icon, label] = Category["/registration"];
  const [category, setCategory] = useState("Przedmiot");
  const icon = [<Hammer />, <Speech />, <BellDot />];

  const handleSetCategory = (btnCategory) => {
    //add function to change category
  };

  useEffect(() => {
    setLocation({
      name: label,
      icon: <Icon />,
    });
    return () => setLocation({ name: "", icon: null });
  }, [setLocation]);

  const { data, loading, error } = useQuery(GET_LECTURES);

  if (loading) return <p className="text-center pt-20">Ładowanie...</p>;
  if (error)
    return (
      <p className="text-center pt-20 text-red-500">Błąd: {error.message}</p>
    );

  return (
    <>
      <section className="pt-20 p-4">
        <article>
          <nav>
            <ul className="flex flex-wrap gap-4 justify-center">
              {data.lectures
                ?.filter(
                  (lecture, index, self) =>
                    index === self.findIndex((l) => l.type === lecture.type),
                )
                .map((lecture, index) => (
                  <button
                    key={index}
                    value={lecture.type}
                    className="relative flex justify-center gap-2 bg-white w-42 rounded-full p-2 text-center shadow border-1 border-blue-300"
                  >
                    <div className="absolute left-3">{icon[index]}</div>
                    <figcaption>{lecture.type}</figcaption>
                  </button>
                ))}
            </ul>
          </nav>
        </article>

        <article className="flex justify-center">
          <div className="absolute translate-y-5 rounded bg-white shadow p-2">
            Łączna ilość żetonów: 2
          </div>
        </article>

        <section className="flex flex-col gap-5 translate-y-20 md:ms-15 md:me-15">
          {data?.lectures?.map((lecture, index) =>
            lecture.type && category && lecture.type === category ? (
              <article
                key={index}
                className="flex bg-white rounded-[0.3rem] w-full p-4 items-center"
              >
                <div className="flex-1">
                  <p>{lecture.name}</p>
                  <p>Różana 1</p>
                </div>
                <div className="flex flex-1 gap-4 ms-auto me-auto">
                  <p>8:00 - 9:30</p>
                  <p>Krzysztof Michalski</p>
                </div>
                <SignUpButton signed={lecture.signed} />
              </article>
            ) : null,
          )}
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
