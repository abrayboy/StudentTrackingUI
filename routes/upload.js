var express = require('express');
var router = express.Router();
var fs = require('fs');
const FileUtils = require("./../io/file_utils");

const FileWriter = new FileUtils.FileWriter();

/* POST users listing. */
router.post('/bitch', function (req, res) {
  console.log(req.body.data);
  
  var data =fs.readFileSync(FileWriter.writePdf(req.body));
  res.contentType("application/pdf");
  res.send(data);
})
module.exports = router;
