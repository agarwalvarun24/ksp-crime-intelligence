const app = require("./app");

const PORT = process.env.X_ZOHO_CATALYST_LISTEN_PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});