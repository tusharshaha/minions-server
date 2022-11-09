const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const minionsRoute = require("./routes/minions.route");
const dbConnect = require("./utils/dbConnect");
require("colors");
require("dotenv").config();

// middlewares
app.use(cors());

// connect to database
dbConnect();

app.get("/", (req, res) => {
    res.send("Server Working");
})

app.use("/api/v1/minions", minionsRoute);

const server = app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`.bgYellow);
})

// handle globaly unhandle Rejection
process.on("unhandledRejection", (error) => {
    server.close(() => {
        process.exit(1);
    });
});