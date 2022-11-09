const mongoose = require("mongoose");

const minionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "minions name can't be empty!"],
        trim: true,
        unique: true
    },
    age: {
        type: Number,
        required: [true, "minions age can't be empty"]
    },
    color: {
        type: String,
        required: [true, "colors can't be empty"]
    }
})

const Minion = mongoose.model("Minion", minionSchema);

module.exports = Minion;