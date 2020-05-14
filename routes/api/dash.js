const router = require("express").Router();
const dashController = require("../../controllers/dashController");
// Matches with "/api/dash"

router.route("/get")
  .get(dashController.getDash);
module.exports = router;