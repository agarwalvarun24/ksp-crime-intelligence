const reportsData = {

    summary: {
        totalReports: 124,
        monthlyReports: 18,
        pendingReports: 7,
        completedReports: 117
    },


    districtReports: [

        {
            district:"Bengaluru",
            cases:42,
            solved:35,
            pending:7
        },

        {
            district:"Mysuru",
            cases:25,
            solved:21,
            pending:4
        },

        {
            district:"Belagavi",
            cases:18,
            solved:15,
            pending:3
        },

        {
            district:"Mangaluru",
            cases:14,
            solved:12,
            pending:2
        }

    ],


    recentReports:[

        {
            id:1,
            title:"Cyber Crime Analysis Report",
            date:"2026-07-20",
            status:"Completed"
        },

        {
            id:2,
            title:"Vehicle Theft Investigation",
            date:"2026-07-18",
            status:"Completed"
        },

        {
            id:3,
            title:"District Crime Summary",
            date:"2026-07-15",
            status:"Pending"
        }

    ],


    aiSummary:{

        title:"AI Crime Pattern Summary",

        description:
        "Cyber crimes have increased in Bengaluru while vehicle theft cases show concentration around Mysuru region."

    }

};


module.exports = reportsData;