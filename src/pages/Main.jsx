import LeftNav from "../components/LeftNav";
import Cockpit from "./Cockpit";
import { useMenu } from "../hooks/MenuContext";
const Main = () => {
  const { isMenuOpen } = useMenu();
  const mainGridLayout = isMenuOpen
    ? "grid-cols-[auto_1fr] max-[580px]:grid-cols-[auto]"
    : "grid-cols-[auto]";
  return (
    <>
      <main className={`grid ${mainGridLayout}`}>
        <LeftNav />
        <Cockpit />
      </main>
    </>
  );
};
export default Main;
