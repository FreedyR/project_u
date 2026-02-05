import LeftNav from "../components/LeftNav";
import Cockpit from "./Cockpit";
import { useMenu } from "../hooks/MenuContext";
import { Routes, Route } from "react-router";
import ClassesPage from "./ClassesPage";
import LectureRegisterPage from "./LectureRegisterPage";
import LoginForm from "./Login";
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
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </main>
    </>
  );
};
export default Main;
