const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const db = require("./models");

// Our connection to our database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/googlebooks", {useNewUrlParser: true});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Routes
app.get("/api/books", (req, res) => {
 db.Book
  .find({})
  .then(dbBooks => res.json(dbBooks))
  .catch(err => res.json(err));
});

app.post("/api/books", (req, res) => {
  db.Book
    .create({
      title: req.body.title,
      authors: req.body.authors,
      description: req.body.description,
      image: req.body.image,
      link: req.body.link,
    }).then(dbBook => res.json(dbBook))
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