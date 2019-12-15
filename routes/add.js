var express = require('express');
var router = express.Router();
var store = require('./../store/StudentStore');
var logging = require('./../log/logger');

const Logger = new logging.Logger("AddController");

/* POST Add student */
router.post("/add", (req, res) => {
    Logger.trace(" POST /api/add");
    Logger.info(req.body.StudentId)
    let student = req.body;
    let StudentStore = new store.StudentStore();
    StudentStore.Renew();
    let success = StudentStore.Add(student);
    Logger.trace(" POST end");
    res.send({success});
});

module.exports = router;