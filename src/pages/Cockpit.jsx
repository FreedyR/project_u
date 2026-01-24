import Exams from "../components/Exams.jsx";
import Classes from "../components/Classes.jsx";
import Annoucments from "../components/Annoucments.jsx";
import { useMenu } from "../hooks/MenuContext.jsx";
const Cockpit = () => {
  const columnsLayout = "md:grid-cols-2 max-[505px]:grid-cols-1";
  const { isMenuOpen } = useMenu();
  return (
    <article
      className={`grid ${isMenuOpen ? "" : `${columnsLayout}`} gap-2 auto-rows-min pt-15 p-2 xl:grid-cols-3 xl:auto-rows-[25%]`}
    >
      <Classes />
      <Annoucments />
      <Exams />
    </article>
  );
};
export default Cockpit;
