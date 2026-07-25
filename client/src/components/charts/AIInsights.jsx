import { useEffect, useState } from "react";
import { getAnalytics } from "../../api/analyticsApi";

function AIInsights() {

    const [insights,setInsights]=useState([]);

    useEffect(()=>{

        async function load(){

            const analytics=await getAnalytics();

            setInsights(analytics.aiInsights);

        }

        load();

    },[]);

    return(

        <div className="bg-slate-900 rounded-xl p-5">

            <h2 className="text-white text-xl font-semibold mb-5">

                AI Crime Insights

            </h2>

            <div className="space-y-4">

                {

                    insights.map((item,index)=>(

                        <div
                            key={index}
                            className="bg-slate-800 rounded-lg p-4 border-l-4 border-blue-500"
                        >

                            <p className="text-gray-300">

                                {item}

                            </p>

                        </div>

                    ))

                }

            </div>

        </div>

    )

}

export default AIInsights;