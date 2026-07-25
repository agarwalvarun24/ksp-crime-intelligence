import { useState } from "react";

import {
  Brain,
  Sparkles,
  RefreshCw,
  Target,
} from "lucide-react";


function Toggle({ value, onChange }) {

  return (

    <button

      onClick={() => onChange(!value)}

      className={`w-12 h-6 rounded-full transition ${
        value ? "bg-blue-600" : "bg-slate-700"
      }`}

    >

      <div

        className={`h-5 w-5 bg-white rounded-full mt-0.5 transition ${
          value
          ? "translate-x-6"
          : "translate-x-0.5"
        }`}

      />

    </button>

  );

}





function AISettings() {


  const [recommendations,setRecommendations] = useState(true);

  const [autoRefresh,setAutoRefresh] = useState(true);


  const [confidence,setConfidence] = useState(75);



  return (

    <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">


      <div className="flex items-center gap-3 mb-6">

        <Brain
          className="text-purple-400"
          size={24}
        />

        <h2 className="text-2xl text-white font-semibold">

          AI Configuration

        </h2>

      </div>





      <div className="space-y-6">





        <div className="flex justify-between items-center">


          <div className="flex gap-3">


            <Sparkles className="text-purple-400"/>


            <div>

              <h3 className="text-white font-medium">

                Smart Recommendations

              </h3>


              <p className="text-slate-400 text-sm">

                Enable AI investigation suggestions.

              </p>


            </div>


          </div>



          <Toggle

            value={recommendations}

            onChange={setRecommendations}

          />


        </div>








        <div className="flex justify-between items-center">


          <div className="flex gap-3">


            <RefreshCw className="text-green-400"/>


            <div>

              <h3 className="text-white font-medium">

                Auto Refresh Dashboard

              </h3>


              <p className="text-slate-400 text-sm">

                Automatically update intelligence data.

              </p>


            </div>


          </div>



          <Toggle

            value={autoRefresh}

            onChange={setAutoRefresh}

          />


        </div>








        <div>


          <div className="flex items-center gap-2 mb-3">


            <Target className="text-red-400"/>


            <label className="text-white font-medium">

              Prediction Confidence

            </label>


          </div>



          <input

            type="range"

            min="0"

            max="100"

            value={confidence}

            onChange={(e)=>setConfidence(e.target.value)}

            className="w-full"

          />



          <div className="text-right text-blue-400 mt-2">

            {confidence}%

          </div>


        </div>






        <div>


          <label className="text-slate-400 text-sm">

            AI Alert Sensitivity

          </label>



          <select

            className="w-full mt-2 bg-slate-800 text-white rounded-lg p-3 border border-slate-700"

          >

            <option>
              High
            </option>

            <option>
              Medium
            </option>

            <option>
              Low
            </option>


          </select>



        </div>







        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition">

          Save AI Preferences

        </button>



      </div>


    </div>

  );

}


export default AISettings;