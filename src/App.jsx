import "./App.css";
import Header from "./components/Header.jsx";
import { MenuProvider } from "./hooks/MenuContext.jsx";
import Cockpit from "./pages/Cockpit.jsx";
import LeftNav from "./components/LeftNav.jsx";
function App() {
  return (
    <>
      <MenuProvider>
        <Header />
        <main className="flex">
          <LeftNav />
          <Cockpit />
        </main>
      </MenuProvider>
    </>
  );
}

export default App;
