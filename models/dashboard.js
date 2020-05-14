const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Dashboard = new Schema({
    items: [],
    owner: String,

    lastUpdated: Date
});

module.exports = mongoose.model('dashboards', Dashboard);