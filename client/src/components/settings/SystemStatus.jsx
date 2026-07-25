import {
  Server,
  Database,
  BrainCircuit,
  FileCheck,
  CheckCircle,
} from "lucide-react";



function StatusCard({
  title,
  status,
  icon
}) {


  return (

    <div className="bg-slate-800 rounded-xl p-4 flex items-center justify-between">


      <div className="flex items-center gap-3">


        {icon}


        <div>

          <h3 className="text-white font-medium">

            {title}

          </h3>


          <p className="text-green-400 text-sm">

            {status}

          </p>


        </div>


      </div>


      <CheckCircle
        className="text-green-400"
      />


    </div>

  );

}






function SystemStatus(){


  return (

    <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">


      <h2 className="text-2xl text-white font-semibold mb-6">

        System Status

      </h2>




      <div className="space-y-4">


        <StatusCard

          title="Backend API"

          status="Connected"

          icon={
            <Server className="text-blue-400"/>
          }

        />



        <StatusCard

          title="Database"

          status="Operational"

          icon={
            <Database className="text-green-400"/>
          }

        />



        <StatusCard

          title="AI Prediction Engine"

          status="Running"

          icon={
            <BrainCircuit className="text-purple-400"/>
          }

        />



        <StatusCard

          title="Reports Service"

          status="Active"

          icon={
            <FileCheck className="text-yellow-400"/>
          }

        />



      </div>






      <div className="mt-6 bg-slate-800 rounded-xl p-4">


        <p className="text-slate-400 text-sm">

          Platform Version

        </p>


        <p className="text-white font-semibold">

          KSP Crime Intelligence v1.0

        </p>



        <p className="text-slate-400 text-sm mt-4">

          Last Synchronization

        </p>


        <p className="text-white">

          Today, 10:45 AM

        </p>


      </div>





    </div>

  );

}



export default SystemStatus;