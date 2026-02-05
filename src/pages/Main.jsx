import LeftNav from "../components/LeftNav";
import Cockpit from "./Cockpit";
import { useMenu } from "../hooks/MenuContext";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import ClassesPage from "./ClassesPage";
import LectureRegisterPage from "./LectureRegisterPage";
const Main = () => {
  const { isMenuOpen } = useMenu();
  const mainGridLayout = isMenuOpen
    ? `grid-cols-[auto_1fr] max-[580px]:grid-cols-[auto]`
    : "grid-cols-[auto]";
  return (
    <>
      <main className={`grid ${mainGridLayout}`}>
        <LeftNav />
        <Routes>
          <Route path="/" element={<Cockpit />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/registration" element={<LectureRegisterPage />} />
        </Routes>
      </main>
    </>
  );
};
export default Main;
