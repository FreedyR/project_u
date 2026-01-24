import Exams from "../components/Exams.jsx";
import Classes from "../components/Classes.jsx";
import Annoucments from "../components/Annoucments.jsx";
const Cockpit = () => {
  return (
    <section className={`h-full w-full`}>
      <article className={`grid gap-2 pt-15 p-2 md:grid-cols-2 xl:grid-cols-3`}>
        <Classes />
        <Annoucments />
        <Exams />
      </article>
    </section>
  );
};
export default Cockpit;
