import { Globe, BookOpen, GraduationCap } from "lucide-react";
import { useEffect } from "react";
import { useLocationName } from "../hooks/LocationContext";
import Category from "../misc/CategoryNav";

const GradesPage = () => {
  const { setLocation } = useLocationName();
  const [Icon, label] = Category["/grades"];
  useEffect(() => {
    setLocation({
      name: label,
      icon: <Icon />,
    });
    return () => setLocation({ name: "", icon: null });
  }, [setLocation]);
  return (
    <>
      <section className="pt-21 max-sm:pt-25 p-4">
        <article className="relative w-full bg-[#bd82f4] p-4 rounded flex flex-wrap gap-5 border-3 border-[#a40eef]">
          <p className="absolute translate-y-[-2.6rem] text-xl">Analiza</p>
          <p>Dr. Jan Kowalski</p>
          <div className="flex gap-5 ml-auto flex-wrap">
            <div className="flex gap-5">
              <div className="flex flex-col">
                <p>Wykład</p>
                <p className="ml-auto mr-auto">4</p>
              </div>
              <div className="flex flex-col">
                <p>Ćwiczenia</p>
                <p className="ml-auto mr-auto">5</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col">
                <p>Materiały</p>
                <button
                  className={`ml-auto mr-auto w-min h-min bg-[#a40eef] p-2 rounded-lg`}
                >
                  <Globe className="text-white" />
                </button>
              </div>
              <div className="flex flex-col">
                <p>Sylabus</p>
                <button
                  className={`ml-auto mr-auto w-min h-min bg-[#a40eef] p-2 rounded-lg`}
                >
                  <BookOpen className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};
export default GradesPage;
