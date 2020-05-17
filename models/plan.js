const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Plan = new Schema({
    day: String,
    time: String,
    plan: String,
    owner: String
});

module.exports = mongoose.model('plans', Plan);