import { useQuery } from "@apollo/client/react";
import { GET_LECTURES } from "../../graphql/queries";
import SignUpButton from "../SignUpButton";

const LectureMap = ({ type }) => {
  const { data, loading, error } = useQuery(GET_LECTURES);
  if (loading) return <p className="text-center pt-20">Ładowanie...</p>;
  if (error)
    return (
      <p className="text-center pt-20 text-red-500">Błąd: {error.message}</p>
    );
  return (
    <>
      {data?.lectures?.map((lecture, index) =>
        lecture.type && type && lecture.type === type ? (
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
    </>
  );
};

export default LectureMap;
