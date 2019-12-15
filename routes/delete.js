var express = require('express');
var router = express.Router();
var store = require('./../store/StudentStore');

/* DELETE Delete student */
router.delete("/delete", (req, res) => {
    console.log(req.body)
    let student = req.body;
    let StudentStore = new store.StudentStore();
    StudentStore.Renew();
    let success = StudentStore.Delete(student);
    res.send({success});
});

module.exports = router;