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
        //RES.JSON()
      } catch (err) {
        console.error(err);
      }
})

router.post("/", (req,res)=> {
    console.log("hit my post routes")
    console.log(req.body)
    req.body.id = uniqid()
    console.log(req.body)
    // read and parse
//push to my array 

//save by stringifying

})




module.exports = router