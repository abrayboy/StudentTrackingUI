var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/students', function(req, res, next) {
  let students = [
    {
      Name:"Joe"
    },
    {
      Name:"Jae"
    },
    {
      Name:"Jo"
    },
    {
      Name:"Hoe"
    },
    {
      Name:"Moe"
    }
  ];
  res.send(students);
});

module.exports = router;
