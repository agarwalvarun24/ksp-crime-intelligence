import { useState } from "react";
import KarnatakaMap from "../../components/map/KarnatakaMap";
import HeatMap from "../../components/map/HeatMap";
import RecentIncidents from "../../components/map/RecentIncidents";

function CrimeMap() {

    const [filters, setFilters] = useState({
        district: "",
        crimeType: "",
        severity: ""
    });

    return (

        <div className="p-6">

            <h1 className="text-3xl font-bold text-white mb-6">
                Karnataka Crime Intelligence Map
            </h1>

            <div className="bg-slate-900 p-5 rounded-xl mb-6">

                <div className="grid md:grid-cols-3 gap-4">

                    <input
                        placeholder="Search District"
                        className="bg-slate-800 p-3 rounded text-white"
                        onChange={(e)=>
                            setFilters({...filters,district:e.target.value})
                        }
                    />

                    <select
                        className="bg-slate-800 p-3 rounded text-white"
                        onChange={(e)=>
                            setFilters({...filters,crimeType:e.target.value})
                        }
                    >
                        <option value="">All Crimes</option>
                        <option>Cyber Crime</option>
                        <option>Theft</option>
                        <option>Robbery</option>
                        <option>Fraud</option>
                        <option>Drug Case</option>
                        <option>Vehicle Theft</option>
                        <option>Murder</option>
                        <option>Kidnapping</option>
                    </select>

                    <select
                        className="bg-slate-800 p-3 rounded text-white"
                        onChange={(e)=>
                            setFilters({...filters,severity:e.target.value})
                        }
                    >
                        <option value="">All Severity</option>
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                    </select>

                </div>

            </div>

            <div className="grid lg:grid-cols-4 gap-6">

    {/* Left Side - Map */}
    <div className="lg:col-span-3">
        <KarnatakaMap filters={filters} />
    </div>

    {/* Right Side */}
    <div className="space-y-6">
        <HeatMap />
        <RecentIncidents />
    </div>

</div>

        </div>

    );
}

export default CrimeMap;