const mongoose = require("mongoose");

const minionSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "minions name can't be empty!"],
            trim: true
        },
        age: {
            type: Number,
            required: [true, "minions age can't be empty"],
            min: [1, "age can't be negative or zero."]
        },
        color: {
            type: String,
            required: [true, "colors can't be empty"]
        }
    },
    {
        timestamps: true
    }
)

const Minion = mongoose.model("Minion", minionSchema);

module.exports = Minion;