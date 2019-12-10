var express = require('express');
var router = express.Router();
var store = require('./../cache/store.json');
var dto = require('./../dto/StudentDTO');

router.get('/student/:studentId', (req, res, next) => {
    console.log(req.params.studentId);
    let manager = new dto.StudentManager(store);
    let student = new dto.Student(req.params.studentId);
    res.send(manager.Get(student));
});

module.exports = router;