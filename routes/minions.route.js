const express = require("express");
const { getAllMinions, createMinions, updateMinion, deleteMinion } = require("../controllers/minions.controller");
const router = express.Router();

router.route("/")
    .get(getAllMinions)
    .post(createMinions);

router.route("/:id")
    .patch(updateMinion)
    .delete(deleteMinion)

module.exports = router;