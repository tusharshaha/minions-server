const Minion = require("../models/Minion.model")

module.exports.getAllMinions = async (req, res) => {
    try {
        const minions = await Minion.find({});
        res.status(200).json({
            success: true,
            message: "successfully get minions",
            minions
        })
    } catch (err) {
        res.status(404).json({
            success: false,
            message: err.message
        })
    }
}
module.exports.createMinions = async (req, res) => {
    try {
        await Minion.create(req.body);
        res.status(200).json({
            success: true,
            message: "successfully created minion",
        })
    } catch (err) {
        res.status(404).json({
            success: false,
            message: err.message
        })
    }
}
module.exports.updateMinion = async (req, res) => {
    try {
        const name = req.params.name;
        const update = req.body;
        const option = { runValidators: true, new: true };
        await Minion.findOneAndUpdate({ name }, update, option);
        res.status(200).json({
            success: true,
            message: "successfully created minion",
        })
    } catch (err) {
        res.status(404).json({
            success: false,
            message: err.message
        })
    }
}
module.exports.deleteMinion = async (req, res) => {
    try {
        const name = req.params.name;
        await Minion.findOneAndDelete({ name })
        res.status(200).json({
            success: true,
            message: "successfully deleted minion",
        })
    } catch (err) {
        res.status(404).json({
            success: false,
            message: err.message
        })
    }
}

