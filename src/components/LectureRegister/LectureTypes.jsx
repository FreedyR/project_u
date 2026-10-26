import { useQuery } from "@apollo/client/react";
import { Hammer, Speech, BellDot } from "lucide-react";
import { GET_LECTURE_TYPES } from "../../graphql/queries";

const icon = {
  Przedmiot: <Hammer />,
  Lektorat: <Speech />,
  Wizyta: <BellDot />,
};

const LectureTypes = ({ handleSetCategory, category }) => {
  const { data, loading, error } = useQuery(GET_LECTURE_TYPES);
  const types = data?.lectureTypes || [];
  return (
    <>
      {types.map((type, index) => (
        <button
          key={index}
          value={type}
          onClick={handleSetCategory}
          className={`relative flex justify-center gap-2 bg-white w-42 rounded-full p-2 text-center shadow ${(type) === category ? "border-1 border-blue-300" : ""} `}
        >
          <div className="absolute left-3">{icon[type] || null}</div>
          <figcaption>{type}</figcaption>
        </button>
      ))}
    </>
  );
};

export default LectureTypes;
