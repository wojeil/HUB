const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Plan = new Schema({
    schedule: [],
    owner: String
});

module.exports = mongoose.model('plans', Plan);