import { useState } from "react";

import {
  ShieldCheck,
  Lock,
  KeyRound,
  Clock,
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

        className={`h-5 w-5 bg-white rounded-full transition mt-0.5 ${
          value
          ? "translate-x-6"
          : "translate-x-0.5"
        }`}

      />


    </button>

  );

}





function SecuritySettings(){


  const [twoFactor,setTwoFactor] = useState(true);

  const [autoLogout,setAutoLogout] = useState(true);



  return (

    <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">



      <div className="flex items-center gap-3 mb-6">


        <ShieldCheck
          className="text-blue-400"
          size={24}
        />


        <h2 className="text-2xl text-white font-semibold">

          Security Settings

        </h2>


      </div>





      <div className="space-y-6">





        <div className="flex justify-between items-center">


          <div className="flex gap-3">


            <Lock className="text-green-400"/>


            <div>

              <h3 className="text-white font-medium">

                Two Factor Authentication

              </h3>


              <p className="text-slate-400 text-sm">

                Add extra security to officer account.

              </p>


            </div>


          </div>



          <Toggle

            value={twoFactor}

            onChange={setTwoFactor}

          />


        </div>







        <div className="flex justify-between items-center">


          <div className="flex gap-3">


            <Clock className="text-yellow-400"/>


            <div>

              <h3 className="text-white font-medium">

                Auto Logout

              </h3>


              <p className="text-slate-400 text-sm">

                Automatically end inactive sessions.

              </p>


            </div>


          </div>



          <Toggle

            value={autoLogout}

            onChange={setAutoLogout}

          />


        </div>





        <div>


          <label className="text-slate-400 text-sm">

            Session Timeout

          </label>



          <select

            className="w-full mt-2 bg-slate-800 text-white rounded-lg p-3 border border-slate-700"

          >

            <option>
              15 Minutes
            </option>

            <option>
              30 Minutes
            </option>

            <option>
              1 Hour
            </option>


          </select>



        </div>







        <div>


          <label className="text-slate-400 text-sm">

            Change Password

          </label>


          <div className="relative mt-2">


            <KeyRound

              className="absolute left-3 top-3 text-slate-500"

              size={18}

            />



            <input

              type="password"

              placeholder="Enter new password"

              className="w-full pl-10 bg-slate-800 text-white rounded-lg p-3 border border-slate-700"

            />


          </div>


        </div>






        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">

          Update Security

        </button>




      </div>


    </div>

  );

}


export default SecuritySettings;