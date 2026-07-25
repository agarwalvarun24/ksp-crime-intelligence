import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

import { getCrimes } from "../../api/crimeApi";

const highIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const mediumIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const lowIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function KarnatakaMap({ filters }) {
  const [crimes, setCrimes] = useState([]);

  useEffect(() => {
  async function load() {
    try {
      const data = await getCrimes(filters);
      setCrimes(data);
    } catch (err) {
      console.error(err);
    }
  }

  load();
}, [filters]);
  const getIcon = (severity) => {
    if (severity === "High") return highIcon;
    if (severity === "Medium") return mediumIcon;
    return lowIcon;
  };

  return (
    <div className="rounded-xl overflow-hidden shadow-lg border border-slate-700">
      <MapContainer
        center={[15.3173, 75.7139]}
        zoom={7}
        style={{ height: "650px", width: "100%" }}
      >
        <TileLayer
          attribution="OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {crimes.map((crime) => (
          <Marker
            key={crime.id}
            position={[crime.latitude, crime.longitude]}
            icon={getIcon(crime.severity)}
          >
            <Popup>
              <h2>
                <strong>{crime.district}</strong>
              </h2>

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
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default KarnatakaMap;