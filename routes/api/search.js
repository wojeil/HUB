const router = require("express").Router();
const searchController = require("../../controllers/searchController");
// Matches with "/api/search"
router.route("/team")
    .get(searchController.getTeam);

router.route("/:user")
    .get(searchController.getUser);
module.exports = router;