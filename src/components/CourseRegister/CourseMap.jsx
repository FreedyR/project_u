import { useQuery } from "@apollo/client/react";
import { GET_COURSES } from "../../graphql/queries";
import SignUpButton from "../SignUpButton";

const CourseMap = ({ type }) => {
  const { data, loading, error } = useQuery(GET_COURSES);
  if (loading) return <p className="text-center pt-20">Ładowanie...</p>;
  if (error)
    return (
      <p className="text-center pt-20 text-red-500">Błąd: {error.message}</p>
    );
  return (
    <>
      {data?.courses?.map((course, index) =>
        course.type && type && course.type === type ? (
          <article
            key={index}
            className="flex bg-white rounded-[0.3rem] w-full p-4 items-center"
          >
            <div className="flex-1">
              <p>{course.name}</p>
              <p>Różana 1</p>
            </div>
            <div className="flex flex-1 gap-4 ms-auto me-auto">
              <p>8:00 - 9:30</p>
              <p>Krzysztof Michalski</p>
            </div>
            <SignUpButton signed={course.signed} />
          </article>
        ) : null,
      )}
    </>
  );
};

export default CourseMap;
