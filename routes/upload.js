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
  builder
    .Build(Object.keys(req.body)[0])
    .then(json => {
      let studentFields = json.map(obj => Object.values(obj));
      let manager = new dto.StudentManager();
      studentFields.forEach(field => {
        field.unshift(null);
        let student = new (Function.prototype.bind.apply(dto.Student, field));
        manager.AddStudent(student);
      });
      let myStore = new Store.StudentStore(manager, path.join(__dirname, './../cache/store.json'));
      myStore.WriteToStore();
      res.send(manager.Students);
      Logger.trace("POST /api/upload <<");
    })
  // let manager = new dto.StudentManager(students);
  // let myStore = new Store.StudentStore(manager, path.join(__dirname, './../cache/store.json'));
  // myStore.WriteToStore();
  // console.log(students);
  
});
module.exports = router;
