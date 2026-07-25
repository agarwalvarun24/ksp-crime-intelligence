import { useEffect, useState } from "react";
import { getAnalytics } from "../../api/analyticsApi";

function SummaryCards() {

    const [summary,setSummary]=useState({});

    useEffect(()=>{

        async function load(){

            const data=await getAnalytics();

            setSummary(data.summary);

        }

        load();

    },[]);

    const cards=[
        {
            title:"Total Cases",
            value:summary.totalCases,
            color:"bg-blue-600"
        },
        {
            title:"Solved",
            value:summary.solvedCases,
            color:"bg-green-600"
        },
        {
            title:"Pending",
            value:summary.pendingCases,
            color:"bg-red-600"
        },
        {
            title:"Conviction %",
            value:`${summary.convictionRate}%`,
            color:"bg-purple-600"
        }
    ];

    return(

        <div className="grid md:grid-cols-4 gap-5">

            {cards.map(card=>(

                <div
                    key={card.title}
                    className={`${card.color} rounded-xl p-5 shadow-lg`}
                >

                    <div className="text-gray-100">
                        {card.title}
                    </div>

                    <div className="text-4xl font-bold mt-3 text-white">
                        {card.value}
                    </div>

                </div>

            ))}

        </div>

    )

}

export default SummaryCards;