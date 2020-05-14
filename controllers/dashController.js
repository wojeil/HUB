const Dashboard = require('../models/dashboard');

module.exports = {
    getDash: function (req, res) {
        Dashboard.findOne({owner:})
    }
}
