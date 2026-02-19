import { useDroppable } from "@dnd-kit/react";

const LectureChosenZone = ({ id, children }) => {
  const { ref } = useDroppable({
    id,
  });
  return (
    <>
      <div ref={ref} className="col-span-2">
        Wybrane:
        {children}
      </div>
    </>
  );
};

export default LectureChosenZone;
