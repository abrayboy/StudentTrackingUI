var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
const FileUtils = require("./../io/file_utils");
const Store = require('./../store/StudentStore');
const dto = require('./../dto/StudentDTO');

/* POST File Upload. */
router.post('/upload', function (req, res) {
  let builder = new FileUtils.StudentBuilder();
  console.log(path.join(__dirname));
  fs.writeFileSync("/tmp/students.csv", Object.keys(req.body)[0], err =>{ 
    if (err) throw err;
  });
  let students = builder.Build("/tmp/students.csv");
  let manager = new dto.StudentManager(students);
  let myStore = new Store.StudentStore(manager, path.join(__dirname, './../cache/store.json'));
  myStore.WriteToStore();
  res.send(students);
});
module.exports = router;
