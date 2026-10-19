import "./App.css";
import "leaflet/dist/leaflet.css";
import Header from "./components/Header.jsx";
import { MenuProvider } from "./hooks/MenuContext.jsx";
import { BrowserRouter } from "react-router";
import MainPage from "./pages/MainPage.jsx";
import LocationProvider from "./hooks/LocationContext.jsx";
import { ApolloProvider } from "@apollo/client/react";
import { client } from "./client.jsx";

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <LocationProvider>
          <BrowserRouter>
            <MenuProvider>
              <Header />
              <MainPage />
            </MenuProvider>
          </BrowserRouter>
        </LocationProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
