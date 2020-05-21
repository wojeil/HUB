const mongoose = require("mongoose");
const Dashboard = require("../models/dashboard");
const Account = require("../models/account");
const uniqid = require('uniqid');

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/mern_authenticate_me"
);

const dashSeed = [
  {
    items: [
        {
            title: "New Announcement",
            type:"long-term",
            body:"This is the Annoucement"
        },
        {
            title: "New Announcement2",
            type:"long-term",
            body:"This is the Annoucement"
        }
    ],
    owner: "RWS",
    lastUpdate: Date.now()
  },
  {
    items: [
        {
            title: "Update the DB",
            type:"short-term",
            body:"Connect to MongoDB and make a user an Admin"
        },
        {
            title: "New Announcement2",
            type:"long-term",
            body:"This is the Annoucement"
        }
    ],
    owner: "adminTest",
    lastUpdate: Date.now()
  }
];
const adminSeed = [
  {
    username: "RWS",
    password: "Devlop2020",
    role: "Admin",
    manager: uniqid()
  },
  {
    username: "exampleAdmin",
    password: "test",
    role: "Admin",
    manager: "adminTest"
  }
];

Dashboard
  .remove({})
  .then(() => Dashboard.collection.insertMany(dashSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  Account
  .remove({})
  .then(() => Account.collection.insertMany(adminSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
