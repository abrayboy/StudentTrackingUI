var express = require('express');
var router = express.Router();
const store = require('./../cache/store.json');

/* GET All students in store. */
router.get("/students", (req, res, next) => {
    res.send(store);
});

module.exports = router;