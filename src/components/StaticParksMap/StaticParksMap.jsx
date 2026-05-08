import "./StaticParksMap.css";
import mapImage from "../../images/NewarkWards.webp";

const parksByWard = {
  "Central Ward": [
    { name: "Boys Park", address: "223-241 Sussex Avenue" },
    { name: "First St. Park", address: "276-300 First St." },
    { name: "Hank Aaron Field / Sports Complex", address: "Court Street" },
    { name: "Jesse Allen Park", address: "41-57 Avon Avenue" },
    { name: "JFK Recreational Center", address: "211 West Kinney Street" },
    { name: "Nat Turner Park / Hayes Park West", address: "18th Ave & Boyd Street" },
    { name: "Rotunda Pool", address: "7th Ave. & Clifton Ave." }
  ],

  East: [
    { name: "Hennessey Street Park", address: "11-29 Hennessey Street" },
    { name: "Ironbound Recreation Center", address: "46-132 Saint Charles Street" }
  ],

  North: [
    { name: "Elwood Park", address: "115-137 Elwood Avenue" },
    { name: "Kasberger Field", address: "415-439 5th Street" }
  ],

  South: [
    { name: "David L. Warner", address: "386-390 Hawthorne Avenue" },
    { name: "Hunterdon St. Mini Park", address: "556-564 Hunterdon St." },
    { name: "Mildred Helms Park", address: "534-544 Clinton Avenue" },
    { name: "Saint Peters Rec. Center", address: "378 Lyons Avenue" },
    { name: "Terrell James Park", address: "26-32 Johnson Avenue" },
    { name: "Ridgewood Park", address: "193 Bigelow Street" }
  ]
};

function StaticParksMap() {
  const handleClick = (park) => {
    const query = encodeURIComponent(`${park.name} Newark NJ`);
    window.open(`https://www.google.com/search?q=${query}`, "_blank");
  };

  return (
    <div className="static-map-container">
      {/* LEFT: IMAGE */}
      <div className="map-image-panel">
        <img
          src={mapImage} alt="Newark Map"
        />
        <div className="image-overlay">
          <h3>Newark Parks Overview</h3>
        </div>
      </div>

      {/* RIGHT: DROPDOWNS */}
      <div className="parks-panel">
        <h2>Explore Parks by Ward</h2>

        {Object.entries(parksByWard).map(([ward, parks]) => (
          <details key={ward} className="ward-section">
            <summary>{ward}</summary>

            <ul>
              {parks.map((park, idx) => (
                <li key={idx}>
                  <button onClick={() => handleClick(park)}>
                    <strong>{park.name}</strong>
                    <span>{park.address}</span>
                  </button>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </div>
  );
}

export default StaticParksMap;