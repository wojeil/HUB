const path = require("path");
const router = require("express").Router();
const userRoutes = require("./users");
const dashRoutes = require("./dash");
const planRoutes = require("./plan");
const searchRoutes= require("./search");

//User Routes
router.use("/users", userRoutes);
//Dash Routes
router.use("/dash", dashRoutes);
//Plan Routes
router.use("/plan", planRoutes);
//Search Routes
router.use("/search", searchRoutes);
// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
