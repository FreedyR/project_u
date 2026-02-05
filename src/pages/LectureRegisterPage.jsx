import { useState } from "react";

const LectureRegisterPage = () => {
  const [isChecked, setChecked] = useState(false);
  const handleCheckboxClick = (e) => {
    setChecked(e.target.checked);
  };

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
          <div>
            <p>Do wyboru:</p>
            <div
              draggable="true"
              className="relative bg-[#ebf2f2] p-5 rounded-full translate-y-5"
            >
              <label className="flex items-center cursor-pointer group">
                <div className="relative">
                  <input
                    defaultChecked={isChecked}
                    onClick={handleCheckboxClick}
                    type="checkbox"
                    className="peer sr-only"
                  />
                  <div
                    className="w-6 h-6 bg-white border-2 border-slate-300 rounded-md 
                peer-checked:bg-blue-600 peer-checked:border-blue-600 
                transition-all duration-200 ease-in-out"
                  ></div>
                  <svg
                    className="absolute top-1 left-1 w-4 h-4 text-white uppercase opacity-0 
                peer-checked:opacity-100 transition-opacity duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="ml-3 text-slate-700 font-medium group-hover:text-blue-600">
                  Wychowanie fizyczne
                </span>
              </label>
            </div>
          </div>
          <div className="col-span-2">Wybrane:</div>
        </article>
      </section>
    </>
  );
};
export default LectureRegisterPage;
