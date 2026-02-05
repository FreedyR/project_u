import Exams from "../components/Exams.jsx";
import Lectures from "../components/Lectures.jsx";
import Annoucments from "../components/Annoucments.jsx";
import { useMenu } from "../hooks/MenuContext.jsx";
const CockpitPage = () => {
  const columnsLayout = "min-[530px]:grid-cols-2";
  const { isMenuOpen } = useMenu();
  return (
    <section
      className={`grid ${isMenuOpen ? "sm:grid-cols-1 md:grid-cols-[1fr_1fr]" : `${columnsLayout} `} gap-2 auto-rows-min pt-15 p-2 xl:grid-cols-3 xl:auto-rows-[25%]`}
    >
      <Lectures />
      <Annoucments />
      <Exams />
    </section>
  );
};
export default CockpitPage;
