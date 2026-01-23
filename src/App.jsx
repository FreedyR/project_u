import "./App.css";
import LeftNav from "./components/LeftNav.jsx";
import Header from "./components/Header.jsx";
import Exams from "./components/Exams.jsx";
import Classes from "./components/Classes.jsx";
import Annoucments from "./components/Annoucments.jsx";
function App() {
  return (
    <>
      <Header />
      <main className="h-full grid grid-cols-[auto_1fr]">
        <LeftNav />
        <section className="grid sm:grid-cols-2 gap-2 pt-15 auto-rows-min p-2">
          <Classes />
          <Exams />
          <Annoucments />
        </section>
      </main>
    </>
  );
}

export default App;
