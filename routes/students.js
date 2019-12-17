var express = require('express');
var router = express.Router();
var logging = require('./../log/logger');

const Logger = new logging.Logger("StudentsController");

/* GET All students in store. */
router.get("/students", (req, res, next) => {
    Logger.info("GET /api/students");
    if (!req.headers.authorization) {
        res.status(401).json({ Message: "Unauthorized" });
        res.send("Nah");
    }
    else {
        try {
            const store = require('./../cache/store.json');
            let test = require('./../cache/me.json');
            console.log(test);
            res.send(store);
        }
        catch(e) {
            Logger.error(`Could not GET students. Reason: ${e.Message}`);
            res.send([]);
        }
        
    }
});

module.exports = router;