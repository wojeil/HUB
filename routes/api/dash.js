const router = require("express").Router();
const dashController = require("../../controllers/dashController");
// Matches with "/api/dash"

router.route("/get")
  .get(dashController.getDash);

router.route("/post")
  .post(dashController.postDash)
module.exports = router;