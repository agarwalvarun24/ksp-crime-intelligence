const catalyst = require("zcatalyst-sdk-node");
const fs = require("fs");
const csv = require("csv-parser");

const app = catalyst.initialize({
    projectId: "5199200000013048"
});


async function insertCSV(tableName, filePath) {

    const table = app.datastore().table(tableName);

    const rows = [];

    fs.createReadStream(filePath)
        .pipe(csv())
        .on("data", (row) => {
            rows.push(row);
        })
        .on("end", async () => {

            console.log(`Uploading ${rows.length} rows to ${tableName}`);

            for (const row of rows) {

                await table.insertRow(row);

            }

            console.log(`${tableName} upload completed`);

        });
}


insertCSV(
    "CaseMaster",
    "../CaseMaster.csv"
);

insertCSV(
    "Victim",
    "../Victim.csv"
);

insertCSV(
    "Accused",
    "../Accused.csv"
);