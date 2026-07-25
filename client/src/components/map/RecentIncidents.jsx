import { useEffect, useState } from "react";
import { getCrimes } from "../../api/crimeApi";

function RecentIncidents(){

    const [crimes,setCrimes]=useState([]);

    useEffect(()=>{

        async function load(){

            const data=await getCrimes();

            setCrimes(data.slice(0,5));

        }

        load();

    },[]);

    return(

        <div className="bg-slate-900 rounded-xl p-5 mt-6">

            <h2 className="text-white text-xl font-bold mb-4">
                Recent Incidents
            </h2>

            {
                crimes.map(crime=>(

                    <div
                        key={crime.id}
                        className="border-b border-slate-700 py-3"
                    >

                        <div className="text-red-400">
                            {crime.crimeType}
                        </div>

                        <div className="text-white">
                            {crime.district}
                        </div>

                        <div className="text-gray-400 text-sm">
                            {crime.date}
                        </div>

                    </div>

                ))
            }

        </div>

    )

}

export default RecentIncidents;