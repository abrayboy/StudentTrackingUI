var express = require('express');
var router = express.Router();
const store = require('./../cache/store.json');

/* GET All students in store. */
router.get("/students", (req, res, next) => {
    if (!req.headers.authorization) {
        res.status(401).json({Message:"Unauthorized"});
        res.send("Nah");
    }
    else res.send(store);
});

module.exports = router;