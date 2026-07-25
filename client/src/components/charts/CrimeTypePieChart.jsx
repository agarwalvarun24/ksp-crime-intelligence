import { useEffect, useState } from "react";
import { getAnalytics } from "../../api/analyticsApi";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#3B82F6",
  "#EF4444",
  "#10B981",
  "#F59E0B",
  "#8B5CF6",
  "#EC4899",
];

function CrimeTypePieChart() {

  const [data,setData]=useState([]);

  useEffect(()=>{

    async function load(){

      const analytics=await getAnalytics();

      setData(analytics.crimeTypes);

    }

    load();

  },[]);

  return(

    <div className="bg-slate-900 rounded-xl p-5">

      <h2 className="text-white text-xl font-semibold mb-4">
        Crime Categories
      </h2>

      <ResponsiveContainer width="100%" height={320}>

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={110}
            label
          >

            {data.map((entry,index)=>(

              <Cell
                key={index}
                fill={COLORS[index%COLORS.length]}
              />

            ))}

          </Pie>

          <Tooltip/>

        </PieChart>

      </ResponsiveContainer>

    </div>

  )

}

export default CrimeTypePieChart;