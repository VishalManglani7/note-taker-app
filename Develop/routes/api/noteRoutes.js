const router = require("express").Router()
const fs = require("fs")
const path = require("path");
var uniqid = require('uniqid')
//build out get and post routes for notes here
var pathToNotes = path.join(__dirname,"../../db/db.json")

router.get('/', (req,res) =>{
    console.log('this is a get for /notes');
    console.log(req.method)
    try {
        const data = fs.readFileSync(pathToNotes, 'utf8');
        console.log(JSON.parse(data));
        res.json(data);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error' });
      }
});

router.post('/', (req, res) => {
  console.log("hit my post route");
  console.log(req.body);
  try {
      const data = fs.readFileSync(pathToNotes, 'utf8');
      const notes = JSON.parse(data);
      const newNote = {
          id: uniqid(),
          title: req.body.title,
          text: req.body.text};
      notes.push(newNote);
      fs.writeFileSync(pathToNotes, JSON.stringify(notes));
      res.json(newNote);
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error' });
  }
});


    // read and parse
//push to my array 

//save by stringifying






module.exports = router