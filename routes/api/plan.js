const router = require("express").Router();
const planController = require("../../controllers/planController");

// Matches with "/api/plan"
router.route("/get")
    .get(planController.getPlan);
router.route("/post")
  .post(planController.addPlan);

module.exports = router;