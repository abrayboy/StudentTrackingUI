var express = require('express');
var router = express.Router();
var store = require('./../store/StudentStore');

/* POST Edit student */
router.post("/edit", (req, res) => {
    console.log(req.body)
    let student = req.body;
    let StudentStore = new store.StudentStore();
    StudentStore.Renew();
    let success = StudentStore.Update(student);

    res.send({success});
});

module.exports = router;