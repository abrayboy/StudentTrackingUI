var express = require('express');
var router = express.Router();
var fs = require('fs');

/* POST Add new student */
router.post("/add", (req, res) => {
    console.log(req.body)
    let fields = Object.values(req.body);
    let row = fields.reduce((f1, f2) => `${f1},${f2}`).toString();
    console.debug(row)
    let newRow = "\r\n" + row;
    fs.appendFile("/tmp/students.csv", newRow, err => { 
        if (err) console.error(err) 
        else console.info(`New Row  in students.csv => ${newRow}`);
    });
    res.send({NewRow:newRow});
});

module.exports = router;