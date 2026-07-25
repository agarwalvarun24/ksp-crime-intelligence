function GenerateReport({ summary }) {

  return (

    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 h-fit">

      <h2 className="text-xl font-bold text-white mb-6">
        AI Report Assistant
      </h2>


      <div className="bg-slate-800 rounded-xl p-5">

        <h3 className="text-purple-400 font-semibold mb-3">
          {summary.title}
        </h3>


        <p className="text-slate-300 text-sm leading-6">
          {summary.description}
        </p>

      </div>


      <button
        className="
        mt-6
        w-full
        bg-blue-600
        hover:bg-blue-700
        text-white
        py-3
        rounded-xl
        font-semibold
        transition
        "
      >

        Generate New Report

      </button>


    </div>

  );

}


export default GenerateReport;