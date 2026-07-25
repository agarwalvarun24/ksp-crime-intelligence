import { useState } from "react";
import {
  Bell,
  AlertTriangle,
  Brain,
  Mail,
  FileText,
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



function NotificationSettings() {


  const [crimeAlerts,setCrimeAlerts] = useState(true);

  const [aiAlerts,setAiAlerts] = useState(true);

  const [dailySummary,setDailySummary] = useState(false);

  const [emailAlerts,setEmailAlerts] = useState(true);



  return (

    <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">


      <div className="flex items-center gap-3 mb-6">

        <Bell
          className="text-blue-400"
          size={24}
        />

        <h2 className="text-2xl text-white font-semibold">
          Notification Settings
        </h2>

      </div>



      <div className="space-y-6">



        <div className="flex justify-between items-center">


          <div className="flex gap-3">

            <AlertTriangle className="text-red-400"/>

            <div>

              <h3 className="text-white font-medium">
                High Priority Crime Alerts
              </h3>

              <p className="text-slate-400 text-sm">
                Receive alerts for critical incidents.
              </p>

            </div>

          </div>


          <Toggle
            value={crimeAlerts}
            onChange={setCrimeAlerts}
          />


        </div>





        <div className="flex justify-between items-center">


          <div className="flex gap-3">


            <Brain className="text-purple-400"/>


            <div>

              <h3 className="text-white font-medium">
                AI Prediction Alerts
              </h3>

              <p className="text-slate-400 text-sm">
                Get notified about crime predictions.
              </p>


            </div>


          </div>


          <Toggle
            value={aiAlerts}
            onChange={setAiAlerts}
          />


        </div>





        <div className="flex justify-between items-center">


          <div className="flex gap-3">


            <FileText className="text-green-400"/>


            <div>

              <h3 className="text-white font-medium">
                Daily Crime Summary
              </h3>

              <p className="text-slate-400 text-sm">
                Receive daily intelligence reports.
              </p>

            </div>


          </div>



          <Toggle
            value={dailySummary}
            onChange={setDailySummary}
          />


        </div>





        <div className="flex justify-between items-center">


          <div className="flex gap-3">


            <Mail className="text-yellow-400"/>


            <div>

              <h3 className="text-white font-medium">
                Email Notifications
              </h3>

              <p className="text-slate-400 text-sm">
                Send important updates through email.
              </p>


            </div>


          </div>



          <Toggle
            value={emailAlerts}
            onChange={setEmailAlerts}
          />


        </div>




        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">

          Save Notification Settings

        </button>


      </div>


    </div>

  );

}


export default NotificationSettings;