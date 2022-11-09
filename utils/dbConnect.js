const mongoose = require("mongoose");

const dbConnect = async () => await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(res => console.log("Database Connected".bgGreen))
    .catch(err => console.log("Database Connection Failed".bgRed));

module.exports = dbConnect;