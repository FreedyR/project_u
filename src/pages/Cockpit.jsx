import Exams from "../components/Exams.jsx";
import Classes from "../components/Classes.jsx";
import Annoucments from "../components/Annoucments.jsx";
import LeftNav from "../components/LeftNav.jsx";
import { useMenu } from "../hooks/MenuContext.jsx";
const Cockpit = () => {
  const { toggleMenu, isMenuOpen } = useMenu();
  const gridLayout = isMenuOpen
    ? "grid-cols-[auto_1fr] max-[784px]:grid-cols-[auto]"
    : "grid-cols-[auto]";
  return (
    <main className={`h-full grid ${gridLayout}`}>
      <LeftNav />
      <section className="grid lg:grid-cols-2 gap-2 pt-15 auto-rows-min p-2">
        <Classes />
        <Exams />
        <Annoucments />
      </section>
    </main>
  );
};
export default Cockpit;

// className={`h-full grid grid-cols-[${isMenuOpen ? "auto_1fr" : "auto"}]`}
