import "./App.css";
import LeftNav from "./components/LeftNav.jsx";
import Header from "./components/Header.jsx";
import Exams from "./components/Exams.jsx";
import Classes from "./components/Classes.jsx";
import Annoucments from "./components/Annoucments.jsx";
import { MenuProvider } from "./hooks/MenuContext.jsx";
function App() {
  return (
    <>
      <MenuProvider>
        <Header />
        <main className="h-full grid grid-cols-[auto_1fr]">
          <LeftNav />
          <section className="grid xs:grid-cols-1 sm:grid-cols-2 gap-2 pt-15 auto-rows-min p-2">
            <Classes />
            <Exams />
            <Annoucments />
          </section>
        </main>
      </MenuProvider>
    </>
  );
}

export default App;
