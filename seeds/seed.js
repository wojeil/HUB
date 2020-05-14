const mongoose = require("mongoose");
const Dashboard = require("../models/dashboard");

// This file empties the Books collection and inserts the books below

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
    owner: "admin",
    lastUpdate: Date.now()
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
