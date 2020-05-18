const router = require("express").Router();
const planController = require("../../controllers/planController");

// Matches with "/api/plan"
router.route("/get")
    .get(planController.getPlan);
router.route("/post")
  .post(planController.addPlan);
  router.route("/update")
  .post(planController.updatePlan);

  router.route("/remove")
  .delete(planController.removePlan);

module.exports = router;