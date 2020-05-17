const Plan = require("../models/plan");

module.exports = {
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
        })

    }
}