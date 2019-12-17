var express = require('express');
var router = express.Router();
var store = require('./../store/StudentStore');
var logging = require('./../log/logger');

const Logger = new logging.Logger("EditController");

/* PUT Edit student */
router.put("/edit", (req, res) => {
    Logger.info("PUT /api/edit");
    let _student = req.body;
    Logger.info(`Update Student:${_student.StudentId} -> ${_student}`)
    let StudentStore = new store.StudentStore();
    StudentStore.Renew();
    let success = StudentStore.Update(_student);
    let student = !!success ? _student : false
    res.send({student});
});

module.exports = router;