import { Home } from "lucide-react";
import { createContext, useState, use } from "react";

const LocationContext = createContext("Kokpit");

const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState({
    name: "Kokpit",
    icon: <Home />,
  });

  return (
    <LocationContext value={{ location, setLocation }}>
      {children}
    </LocationContext>
  );
};

export const useLocationName = () => {
  const context = use(LocationContext);
  if (!context) throw new Error("useMenu must be used inside the provider");
  return context;
};

export default LocationProvider;
