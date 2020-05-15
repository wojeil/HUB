// === Dependencies ===
const Dashboard = require('../models/dashboard');
const Account = require("../models/account");

module.exports = {
    // Get the dash for current user
    getDash: function (req, res) {
        const { user } = req.session.passport
        
        Account.findOne({username:user}).then(userData => {
            console.log(userData);
            Dashboard.findOne({ owner: userData.manager })
            .then(dashData => {
                console.log(dashData)
                res.json(dashData)
            })
        })
        
    },

    // Create new Dashboard
    postDash: function (req, res) {
        const { user } = req.session.passport
        Dashboard.create({owner:user, lastUpdated: Date.now()}, (err, data) =>{
            if(err) throw err;
            res.status(200);
        })
    },
    
}
