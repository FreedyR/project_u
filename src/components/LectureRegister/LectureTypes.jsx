import { useQuery } from "@apollo/client/react";
import { Hammer, Speech, BellDot } from "lucide-react";
import { GET_LECTURE_ENUM } from "../../graphql/queries";

const icon = {
  Przedmiot: <Hammer />,
  Lektorat: <Speech />,
  Wizyta: <BellDot />,
};

const LectureTypes = ({ handleSetCategory, category }) => {
  const { data, loading, error } = useQuery(GET_LECTURE_ENUM);
  const types = data?.__type?.enumValues || [];
  return (
    <>
      {types.map((cat, index) => (
        <button
          key={index}
          value={cat.name}
          onClick={handleSetCategory}
          className={`relative flex justify-center gap-2 bg-white w-42 rounded-full p-2 text-center shadow ${cat.name === category ? "border-1 border-blue-300" : ""} `}
        >
          <div className="absolute left-3">{icon[cat.name] || null}</div>
          <figcaption>{cat.name}</figcaption>
        </button>
      ))}
    </>
  );
};

export default LectureTypes;
