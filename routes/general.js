var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log('I am going to send the response by the next routing function');
    next();
});

router.get('/', function(req, res, next) {
    res.send({
        "title": "General channel"
    });
});

module.exports = router;
