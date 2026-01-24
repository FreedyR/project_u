import "./App.css";
import Header from "./components/Header.jsx";
import { MenuProvider } from "./hooks/MenuContext.jsx";
import Main from "./pages/Main.jsx";
function App() {
  return (
    <>
      <MenuProvider>
        <Header />
        <Main />
      </MenuProvider>
    </>
  );
}

export default App;
