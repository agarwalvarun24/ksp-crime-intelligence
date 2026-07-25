import KarnatakaMap from "../../components/map/KarnatakaMap";
import HeatMap from "../../components/map/HeatMap";

function CrimeMap() {
  return (
    <div className="p-6 space-y-6">

      <h1 className="text-3xl font-bold text-white">
        Karnataka Crime Map
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        <div className="lg:col-span-3">
          <KarnatakaMap />
        </div>

        <div>
          <HeatMap />
        </div>

      </div>

    </div>
  );
}

export default CrimeMap;