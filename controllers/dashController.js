// === Dependencies ===
const Dashboard = require('../models/dashboard');
const passport = require('passport');

module.exports = {
    // Get the 
    getDash: function (req, res) {
        Dashboard.findOne({owner:req.body.manager})
            .then(dashData => {
                console.log(dashData);
            })
    }
}
