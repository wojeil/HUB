const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Dashboard = new Schema({
    items:[
        {
           title: String,
           type: String,
            content: String
        }
    ],
    owner: Schema.Types.ObjectId,
    
    lastUpdated: Date
});

module.exports = mongoose.model('dashboards', Dashboard);