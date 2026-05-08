import { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./InteractiveMap.css";

function InteractiveMap() {
  const [parksData, setParksData] = useState(null);

  // Replace this with your actual GeoJSON link
  const GEOJSON_URL =
    "https://data.ci.newark.nj.us/dataset/parks/geojson";

  useEffect(() => {
    const fetchParks = async () => {
      try {
        const res = await fetch(GEOJSON_URL);
        const data = await res.json();
        setParksData(data);
      } catch (err) {
        console.error("Error loading parks data:", err);
      }
    };

    fetchParks();
  }, []);

  // Style for park polygons
  const parkStyle = {
    fillColor: "#2ecc71",
    color: "#1e8449",
    weight: 2,
    fillOpacity: 0.4,
  };

  // Called for each feature in GeoJSON
  const onEachFeature = (feature, layer) => {
    if (feature.properties) {
      const name = feature.properties.name || "Unnamed Park";
      const address = feature.properties.address || "No address available";

      const googleSearch = `https://www.google.com/search?q=${encodeURIComponent(
        name + " Newark park"
      )}`;

      const popupContent = `
        <div style="min-width:200px">
          <h3>${name}</h3>
          <p><strong>Address:</strong> ${address}</p>
          <a href="${googleSearch}" target="_blank" rel="noreferrer">
            Search on Google
          </a>
        </div>
      `;

      layer.bindPopup(popupContent);
    }
  };

  return (
    <div className="map-wrapper">
      <MapContainer
        center={[40.7357, -74.1724]} // Newark, NJ
        zoom={13}
        className="map"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {parksData && (
          <GeoJSON
            data={parksData}
            style={parkStyle}
            onEachFeature={onEachFeature}
          />
        )}
      </MapContainer>
    </div>
  );
}

export default InteractiveMap;