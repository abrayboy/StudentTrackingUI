var express = require('express');
var router = express.Router();
var fs = require('fs');
const FileUtils = require("./../io/file_utils");

/* POST File Upload. */
router.post('/upload', function (req, res) {
  let reader = new FileUtils.FileReader();
  console.log(req.body);
  fs.writeFileSync("/tmp/students.csv", Object.keys(req.body)[0], err =>{ 
    if (err) throw err;
  });
  let students = reader.buildStudents("/tmp/students.csv");
  console.log(students.length);
  res.send(students);
})
module.exports = router;
