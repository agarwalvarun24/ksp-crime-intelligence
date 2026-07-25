import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { getCrimes } from "../../api/crimeApi";

function KarnatakaMap({ filters }) {
  const [crimes, setCrimes] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getCrimes(filters);
        console.log("Crime Data:", data);
        setCrimes(data);
      } catch (err) {
        console.error("Error loading crimes:", err);
      }
    }

    loadData();
  }, [filters]);

  return (
    <div className="rounded-xl overflow-hidden border border-slate-700">
      <MapContainer
        center={[15.3173, 75.7139]}
        zoom={7}
        style={{ height: "650px", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {crimes.map((crime) => (
          <Marker
            key={crime.id}
            position={[crime.latitude, crime.longitude]}
          >
            <Popup>
              <div className="space-y-1">
                <h3 className="font-bold">{crime.district}</h3>

                <p>
                  <strong>Crime:</strong> {crime.crimeType}
                </p>

                <p>
                  <strong>Severity:</strong> {crime.severity}
                </p>

                <p>
                  <strong>Status:</strong> {crime.status}
                </p>

                <p>{crime.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default KarnatakaMap;