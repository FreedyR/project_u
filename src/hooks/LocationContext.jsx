import { Home } from "lucide-react";
import { createContext, useState, use, useMemo } from "react";

const LocationContext = createContext("Kokpit");

const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState({
    name: "Kokpit",
    icon: <Home />,
  });

  const value = useMemo(() => ({ location, setLocation }), [location]);

  return <LocationContext value={value}>{children}</LocationContext>;
};

export const useLocationName = () => {
  const context = use(LocationContext);
  if (!context) throw new Error("useLocation must be used inside the provider");
  return context;
};

export default LocationProvider;
