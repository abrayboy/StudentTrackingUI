var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
const FileUtils = require("./../io/file_utils");
const Store = require('./../store/StudentStore');
const dto = require('./../dto/StudentDTO');
var logging = require('./../log/logger');

const Logger = new logging.Logger("UploadController");

/* POST File Upload. */
router.post('/upload', function (req, res) {
  Logger.trace("POST /api/upload >>");
  let builder = new FileUtils.StudentBuilder();
  let filename = path.join(__dirname, "./../students.csv");
  Logger.debug(`CSV Filename:${filename}`);
  fs.writeFileSync(filename, Object.keys(req.body)[0], err =>{ 
    if (err) throw err;
  });
  let students = builder.Build(filename);
  let manager = new dto.StudentManager(students);
  let myStore = new Store.StudentStore(manager, path.join(__dirname, './../cache/store.json'));
  myStore.WriteToStore();
  Logger.trace("POST /api/upload <<");
  res.send(students);
});
module.exports = router;
