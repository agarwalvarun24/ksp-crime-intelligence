function DistrictReport({ reports }) {


return (

<div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 mb-6">


<h2 className="text-xl font-bold text-white mb-5">
District Crime Reports
</h2>


<div className="space-y-4">


{
reports.map((item)=>(

<div
key={item.district}
className="bg-slate-800 rounded-xl p-4 flex justify-between"
>


<div>

<h3 className="text-white font-semibold">
{item.district}
</h3>

<p className="text-slate-400 text-sm">
Total Cases: {item.cases}
</p>

</div>


<div className="text-right">

<p className="text-green-400">
Solved {item.solved}
</p>

<p className="text-red-400">
Pending {item.pending}
</p>

</div>


</div>

))
}


</div>


</div>

);


}


export default DistrictReport;