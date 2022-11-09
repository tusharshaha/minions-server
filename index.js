const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const minionsRoute = require("./routes/minions.route");
require("colors");
app.use(cors());

app.get("/", (req, res) => {
    res.send("Server Working");
})

app.use("/api/v1/minions", minionsRoute);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`.bgYellow);
})