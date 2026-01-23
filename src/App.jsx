import "./App.css";
import Header from "./components/Header.jsx";
import { MenuProvider } from "./hooks/MenuContext.jsx";
import Cockpit from "./pages/Cockpit.jsx";
function App() {
  return (
    <>
      <MenuProvider>
        <Header />
        <Cockpit />
      </MenuProvider>
    </>
  );
}

export default App;
