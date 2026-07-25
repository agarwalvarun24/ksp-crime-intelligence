import {
  User,
  Shield,
  Mail,
  Phone,
  Building2,
  BadgeCheck,
} from "lucide-react";

function OfficerProfile() {
  return (
    <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">

      <div className="flex items-center gap-3 mb-6">
        <User className="text-blue-400" size={24} />
        <h2 className="text-2xl text-white font-semibold">
          Officer Profile
        </h2>
      </div>

      <div className="space-y-5">

        <div>
          <label className="text-slate-400 text-sm">
            Officer Name
          </label>

          <input
            type="text"
            defaultValue="ACP Rajesh Kumar"
            className="w-full mt-2 bg-slate-800 text-white rounded-lg p-3 outline-none border border-slate-700 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="text-slate-400 text-sm">
            Rank
          </label>

          <input
            type="text"
            defaultValue="Assistant Commissioner of Police"
            className="w-full mt-2 bg-slate-800 text-white rounded-lg p-3 outline-none border border-slate-700 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="text-slate-400 text-sm">
            Badge Number
          </label>

          <div className="relative mt-2">

            <BadgeCheck
              className="absolute left-3 top-3 text-slate-500"
              size={18}
            />

            <input
              type="text"
              defaultValue="KSP-01458"
              className="w-full pl-10 bg-slate-800 text-white rounded-lg p-3 outline-none border border-slate-700 focus:border-blue-500"
            />

          </div>
        </div>

        <div>
          <label className="text-slate-400 text-sm">
            Police Station
          </label>

          <div className="relative mt-2">

            <Building2
              className="absolute left-3 top-3 text-slate-500"
              size={18}
            />

            <input
              type="text"
              defaultValue="Bengaluru Central"
              className="w-full pl-10 bg-slate-800 text-white rounded-lg p-3 outline-none border border-slate-700 focus:border-blue-500"
            />

          </div>
        </div>

        <div>
          <label className="text-slate-400 text-sm">
            Department
          </label>

          <div className="relative mt-2">

            <Shield
              className="absolute left-3 top-3 text-slate-500"
              size={18}
            />

            <input
              type="text"
              defaultValue="Crime Investigation Department"
              className="w-full pl-10 bg-slate-800 text-white rounded-lg p-3 outline-none border border-slate-700 focus:border-blue-500"
            />

          </div>
        </div>

        <div>
          <label className="text-slate-400 text-sm">
            Email
          </label>

          <div className="relative mt-2">

            <Mail
              className="absolute left-3 top-3 text-slate-500"
              size={18}
            />

            <input
              type="email"
              defaultValue="officer@ksp.gov.in"
              className="w-full pl-10 bg-slate-800 text-white rounded-lg p-3 outline-none border border-slate-700 focus:border-blue-500"
            />

          </div>
        </div>

        <div>
          <label className="text-slate-400 text-sm">
            Contact Number
          </label>

          <div className="relative mt-2">

            <Phone
              className="absolute left-3 top-3 text-slate-500"
              size={18}
            />

            <input
              type="text"
              defaultValue="+91 9876543210"
              className="w-full pl-10 bg-slate-800 text-white rounded-lg p-3 outline-none border border-slate-700 focus:border-blue-500"
            />

          </div>
        </div>

        <button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
          Save Profile
        </button>

      </div>
    </div>
  );
}

export default OfficerProfile;