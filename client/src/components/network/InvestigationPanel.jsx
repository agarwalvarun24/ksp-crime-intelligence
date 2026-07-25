function InvestigationPanel() {

    return(

        <div className="bg-slate-900 rounded-xl border border-slate-700 p-5 h-full">

            <h2 className="text-white text-xl font-bold mb-6">

                Investigation Details

            </h2>

            <div className="space-y-5">

                <div>

                    <p className="text-gray-400">
                        Name
                    </p>

                    <p className="text-white font-semibold">
                        Suspect A
                    </p>

                </div>

                <div>

                    <p className="text-gray-400">
                        Risk Level
                    </p>

                    <span className="bg-red-600 px-3 py-1 rounded-full text-white">
                        HIGH
                    </span>

                </div>

                <div>

                    <p className="text-gray-400">
                        Phone
                    </p>

                    <p className="text-white">
                        9876543210
                    </p>

                </div>

                <div>

                    <p className="text-gray-400">
                        Vehicle
                    </p>

                    <p className="text-white">
                        KA01AB1234
                    </p>

                </div>

                <div>

                    <p className="text-gray-400">
                        Bank
                    </p>

                    <p className="text-white">
                        SBI
                    </p>

                </div>

                <div>

                    <p className="text-gray-400">
                        Linked Case
                    </p>

                    <p className="text-white">
                        Cyber Fraud
                    </p>

                </div>

            </div>

        </div>

    )

}

export default InvestigationPanel;