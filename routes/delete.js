var express = require('express');
var router = express.Router();
var store = require('./../store/StudentStore');
var logging = require('./../log/logger');

const Logger = new logging.Logger("DeleteController");

/* DELETE Delete student */
router.delete("/delete", (req, res) => {
    Logger.info("DELETE /api/delete")
    let student = req.body;
    let StudentStore = new store.StudentStore();
    StudentStore.Renew();
    let success = StudentStore.Delete(student);
    res.send({success});
});

module.exports = router;