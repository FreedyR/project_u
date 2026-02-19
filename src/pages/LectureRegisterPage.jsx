import Lecture from "../components/LectureRegisterComponents/LectureToRegister";
import LectureChosenZone from "../components/LectureRegisterComponents/LectureChosenZone";
import { DragDropProvider } from "@dnd-kit/react";
import { useState } from "react";

const LectureRegisterPage = () => {
  const [isDropped, setIsDropped] = useState(false);
  return (
    <>
      <section className="pt-15 p-4">
        <article className="grid grid-cols-2 gap-5 bg-[#fefefe] h-full rounded p-4">
          <div className="flex flex-col">
            <label htmlFor="option">Wybierz rodzaj rejestracji:</label>
            <select
              name="option"
              id="option"
              className="translate-y-5 bg-[#ebf2f2] p-5 rounded-full"
            >
              <option value="">Przedmiot</option>
              <option value="">Lektorat</option>
              <option value="">Wizyta</option>
            </select>
          </div>
          <DragDropProvider
            onDragEnd={(ev) => {
              if (ev.canceled) return;
              const { target } = ev.operation;
              setIsDropped(target?.id === "droppable");
            }}
          >
            <div>
              <p>Do wyboru:</p>
              {!isDropped && (
                <Lecture isChecked={isDropped} onCheck={setIsDropped} />
              )}
            </div>
            <LectureChosenZone id="droppable">
              {isDropped && (
                <Lecture isChecked={isDropped} onCheck={setIsDropped} />
              )}
            </LectureChosenZone>
          </DragDropProvider>
        </article>
      </section>
    </>
  );
};
export default LectureRegisterPage;
