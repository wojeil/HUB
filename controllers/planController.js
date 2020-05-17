const Plan = require("../models/plan");

module.exports = {
    // Get plans for user
    getPlan: function (req,res) {
        const { user } = req.session.passport;
        Plan.find({ owner: user }).then(plans => {
            res.status(200).json(plans);
        });
    },
    //Create a new plan
    addPlan: function (req, res) {
        const { user } = req.session.passport;
        const {day, time, plan} = req.body
        Plan.create({
            day,
            time,
            plan,
            owner: user
         }, (err) => {
            if (err) throw err;
            res.status(200);
        });

    }
}