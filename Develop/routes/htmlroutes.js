const router = require("express").Router();
const path = require("path");
//build out get and post routes for notes here

// `GET /notes` should return the `notes.html` file.
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

//`GET *` should return the `index.html` file. Code for wildcard
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;



