import "./App.css";
import Header from "./components/Header.jsx";
import { MenuProvider } from "./hooks/MenuContext.jsx";
import Main from "./pages/Main.jsx";
function App() {
  return (
    <>
      <MenuProvider>
        <Header />
        <LoginForm></LoginForm>
      </MenuProvider>
    </>
  );
}

export default App;
