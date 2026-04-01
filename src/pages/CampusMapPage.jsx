import { useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useLocationName } from "../hooks/LocationContext";
import { Map } from "lucide-react";

const CampusMapPage = () => {
  const { setLocation } = useLocationName();

  useEffect(() => {
    setLocation({
      name: "Mapa Kampusu",
      icon: <Map/>,
    });

    return () => setLocation({ name: "", icon: null });
  }, [setLocation]);
  
  return (
    <>
      <section className="absolute z-1 w-full h-full">
        <MapContainer center={[40, 20]} zoom={13} zoomControl={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </section>
    </>
  );
};
export default CampusMapPage;
