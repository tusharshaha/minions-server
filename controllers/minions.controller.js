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
        const id = req.params.id;
        const update = req.body;
        const option = { runValidators: true, new: true };
        await Minion.findByIdAndUpdate(id, update, option);
        res.status(200).json({
            success: true,
            message: "successfully updated minion",
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
        const id = req.params.id;
        await Minion.findOneAndDelete(id)
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

