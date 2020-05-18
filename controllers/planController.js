const Plan = require("../models/plan");

module.exports = {
    // Get plans for user
    getPlan: function (req, res) {
        const { user } = req.session.passport;
        Plan.find({ owner: user }).then(plans => {
            res.status(200).json(plans);
        });
    },
    //Create a new plan
    addPlan: function (req, res) {
        Plan.create({
            // Create empty schedule M-S
            schedule: [
                ["test", "", "", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", "", "", ""]
            ],
            owner: req.body.username
        }, (err) => {
            if (err) throw err;
        });

    }
}