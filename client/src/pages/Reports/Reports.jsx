import { useEffect, useState } from "react";

import ReportStats from "../../components/reports/ReportStats";
import DistrictReport from "../../components/reports/DistrictReport";
import CrimeReportTable from "../../components/reports/CrimeReportTable";
import GenerateReport from "../../components/reports/GenerateReport";

import { getReports } from "../../api/reportsApi";

function Reports() {

  const [reports, setReports] = useState(null);

  useEffect(() => {

    async function load() {

      const data = await getReports();

      setReports(data);

    }

    load();

  }, []);

  if (!reports)
    return (
      <div className="text-white p-8">
        Loading Reports...
      </div>
    );

  return (

    <div className="min-h-screen bg-slate-950 p-8">

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-white">

          Crime Reports Dashboard

        </h1>

        <p className="text-slate-400 mt-2">

          Generate, analyse and download intelligence reports.

        </p>

      </div>

      <ReportStats summary={reports.summary} />

      <div className="grid grid-cols-3 gap-6 mt-8">

        <div className="col-span-2">

          <DistrictReport
            reports={reports.districtReports}
          />

          <CrimeReportTable
            reports={reports.recentReports}
          />

        </div>

        <GenerateReport
          summary={reports.aiSummary}
        />

      </div>

    </div>

  );

}

export default Reports;