import "./App.css";
import Header from "./components/Header.jsx";
import { MenuProvider } from "./hooks/MenuContext.jsx";
import { BrowserRouter } from "react-router";
import Main from "./pages/Main.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <MenuProvider>
          <Header />
          <Main />
        </MenuProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
