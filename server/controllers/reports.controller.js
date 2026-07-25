const reportsService = require("../services/reports.service");


exports.getReports = (req,res)=>{

    try{

        const reports =
        reportsService.getReports();


        res.status(200).json({

            success:true,

            data:reports

        });


    }

    catch(error){

        res.status(500).json({

            success:false,

            message:"Internal Server Error"

        });

    }

};