import Exams from "../components/Exams.jsx";
import Classes from "../components/Classes.jsx";
import Annoucments from "../components/Annoucments.jsx";
import LeftNav from "../components/LeftNav.jsx";
import { useMenu } from "../hooks/MenuContext.jsx";
const Cockpit = () => {
  const { isMenuOpen } = useMenu();
  const gridLayout = isMenuOpen
    ? "grid-cols-[auto_1fr] max-[784px]:grid-cols-[auto]"
    : "grid-cols-[auto]";
  return (
    <main className={`h-full grid ${gridLayout}`}>
      <LeftNav />
      <section className="grid lg:grid-cols-2 xl:grid-cols-3 gap-2 auto-rows-min pt-15 p-2">
        <Classes />
        <Annoucments />
        <Exams />
      </section>
    </main>
  );
};
export default Cockpit;
