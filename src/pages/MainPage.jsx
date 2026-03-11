import LeftNav from "../components/LeftNav";
import CockpitPage from "./CockpitPage";
import { useMenu } from "../hooks/MenuContext";
import { Routes, Route } from "react-router";
import ClassesPage from "./ClassesPage";
import LectureRegisterPage from "./LectureRegisterPage";
import LoginPage from "./LoginPage";
import CampusMapPage from "./CampusMapPage";
import GradesPage from "./GradesPage";
const MainPage = () => {
  const { isMenuOpen } = useMenu();
  const mainGridLayout = isMenuOpen
    ? `grid-cols-[auto_1fr] max-[580px]:grid-cols-[auto]`
    : "grid-cols-[auto]";
  return (
    <>
      <main className={`grid ${mainGridLayout}`}>
        <LeftNav />
        <Routes>
          <Route path="/" element={<CockpitPage />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/registration" element={<LectureRegisterPage />} />
          <Route path="/grades" element={<GradesPage />}></Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/campusMap" element={<CampusMapPage />} />
        </Routes>
      </main>
    </>
  );
};
export default MainPage;
