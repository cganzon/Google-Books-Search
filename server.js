const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
// const db = require("./models");

// Our connection to our database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/booksDB", {useNewUrlParser: true});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
// /api/members which will be a GET route that 
app.get("/api/members", (req, res) => {
 // returns of your members in your group as JSON data
 db.Member
  .find({})
  .then(dbMembers => res.json(dbMembers))
  .catch(err => res.json(err));
});

// /api/new which will be a POST route that will enable you add a member to your group and responds back with the added member
app.post("/api/new", (req, res) => {
  db.Member
    .create({
      name: req.body.name,
      github: req.body.github,
      linkedin: req.body.linkedin
    }).then(dbMember => res.json(dbMember))
    .catch(err => res.json(err));
})

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});