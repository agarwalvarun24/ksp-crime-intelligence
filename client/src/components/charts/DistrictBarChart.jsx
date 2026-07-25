import { useEffect, useState } from "react";
import { getAnalytics } from "../../api/analyticsApi";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function DistrictBarChart(){

    const [data,setData]=useState([]);

    useEffect(()=>{

        async function load(){

            const analytics=await getAnalytics();

            setData(analytics.districtWise);

        }

        load();

    },[]);

    return(

        <div className="bg-slate-900 rounded-xl p-5">

            <h2 className="text-white text-xl font-semibold mb-4">

                District Crime Comparison

            </h2>

            <ResponsiveContainer width="100%" height={320}>

                <BarChart data={data}>

                    <CartesianGrid stroke="#334155"/>

                    <XAxis dataKey="district" stroke="#CBD5E1"/>

                    <YAxis stroke="#CBD5E1"/>

                    <Tooltip/>

                    <Bar
                        dataKey="crimes"
                        fill="#3B82F6"
                    />

                </BarChart>

            </ResponsiveContainer>

        </div>

    )

}

export default DistrictBarChart;