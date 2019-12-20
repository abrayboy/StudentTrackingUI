var express = require('express');
var router = express.Router();
var dto = require('./../dto/StudentDTO');

router.get('/student/:studentId', (req, res, next) => {
    console.log(req.params.studentId);
    try {
        let manager = new dto.StudentManager();
        let student = new dto.Student(req.params.studentId);
        res.send(manager.Get(student));
    }
    catch(error) {
        res.send({error});
    }
    
});

module.exports = router;