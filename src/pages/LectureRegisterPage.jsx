import { ListCheck } from "lucide-react";
import { useLocationName } from "../hooks/LocationContext";
import Category from "../misc/CategoryNav";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client/react";
import { GET_LECTURES } from "../graphql/queries";
import LectureTypes from "../components/LectureRegister/LectureTypes";
import LectureMap from "../components/LectureRegister/LectureMap";

const LectureRegisterPage = () => {
  const { setLocation } = useLocationName();
  const [Icon, label] = Category["/registration"];
  const [category, setCategory] = useState("Przedmiot");
  const handleSetCategory = (e) => {
    const value = e.currentTarget.value;
    setCategory(value);
  };

  useEffect(() => {
    setLocation({
      name: label,
      icon: <Icon />,
    });
    return () => setLocation({ name: "", icon: null });
  }, [setLocation]);

  return (
    <>
      <section className="pt-20 p-4">
        <article>
          <nav>
            <ul className="flex flex-wrap gap-4 justify-center">
              <LectureTypes
                category={category}
                handleSetCategory={handleSetCategory}
              />
            </ul>
          </nav>
        </article>

        <article className="flex justify-center">
          <div className="absolute translate-y-5 rounded bg-white shadow p-2">
            Łączna ilość żetonów: 2
          </div>
        </article>

        <section className="flex flex-col gap-5 translate-y-20 md:ms-15 md:me-15">
          <LectureMap type={category} />
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
