var express = require('express');
var router = express.Router();
var fs = require('fs');
const FileUtils = require("./../io/file_utils");

const FileWriter = new FileUtils.FileWriter();

/* POST users listing. */
router.post('/bitch', function (req, res) {
  console.log(res.body);
  let reader = new FileUtils.FileReader();
  let students = reader.buildStudents("/Users/juallen/Downloads/Tracking of students, updated.csv");
  console.log(students.length);
  // var data =fs.readFileSync(FileWriter.writePdf(req.body));
  // res.contentType("application/pdf");
  res.send(students);
})
module.exports = router;
