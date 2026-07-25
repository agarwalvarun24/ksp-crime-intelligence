function CrimeReportTable({ reports }) {


return (

<div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">


<h2 className="text-xl font-bold text-white mb-5">
Recent Reports
</h2>


<div className="space-y-3">


{
reports.map((report)=>(


<div
key={report.id}
className="flex justify-between bg-slate-800 rounded-xl p-4"
>


<div>

<h3 className="text-white font-medium">
{report.title}
</h3>

<p className="text-slate-400 text-sm">
{report.date}
</p>

</div>


<span
className={
report.status==="Completed"
?
"text-green-400"
:
"text-yellow-400"
}
>

{report.status}

</span>


</div>


))
}


</div>


</div>

);


}


export default CrimeReportTable;