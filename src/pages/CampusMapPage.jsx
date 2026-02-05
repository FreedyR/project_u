import { MapContainer, TileLayer } from "react-leaflet";
const CampusMapPage = () => {
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
