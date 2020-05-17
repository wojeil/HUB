const router = require("express").Router();
const planController = require("../../controllers/planController");

// Matches with "/api/plan"

router.route("/add")
  .post(planController.addPlan);

module.exports = router;