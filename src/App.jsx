import "./App.css";
import "leaflet/dist/leaflet.css";
import Header from "./components/Header.jsx";
import { MenuProvider } from "./hooks/MenuContext.jsx";
import { BrowserRouter } from "react-router";
import MainPage from "./pages/MainPage.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <MenuProvider>
          <Header />
          <MainPage />
        </MenuProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
