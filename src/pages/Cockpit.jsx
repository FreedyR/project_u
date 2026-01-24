import Exams from "../components/Exams.jsx";
import Classes from "../components/Classes.jsx";
import Annoucments from "../components/Annoucments.jsx";
import LeftNav from "../components/LeftNav.jsx";
import { useMenu } from "../hooks/MenuContext.jsx";
const Cockpit = () => {
  const { isMenuOpen } = useMenu();
  const mainGridLayout = isMenuOpen
    ? "grid-cols-[auto_1fr] max-[580px]:grid-cols-[auto]"
    : "grid-cols-[auto]";
  const columnsLayout = "md:grid-cols-2 max-[505px]:grid-cols-1";
  return (
    <main className={`h-full grid ${mainGridLayout}`}>
      <LeftNav />
      <section
        className={`grid ${isMenuOpen ? "" : `${columnsLayout}`} gap-2 auto-rows-min pt-15 p-2 md:grid-cols-2 xl:grid-cols-3 xl:auto-rows-[25%]`}
      >
        <Classes />
        <Annoucments />
        <Exams />
      </section>
    </main>
  );
};
export default Cockpit;
