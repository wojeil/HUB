const Account = require("../models/account");
const Plan = require("../models/plan");

module.exports = {
    getTeam: function (req, res) {
        const { user } = req.session.passport;
        
        Account.find({manager:user.manager})
            .then(users => {
                res.json(users);
            })
    },
    getUser: function (req, res) {
        Plan.findOne({owner:req.params.user})
        .then(schedule => {
            res.json(schedule);
        })
    }
}