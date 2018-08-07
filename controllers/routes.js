var express = require('express');
var router = express.Router();
var burgers = require('../models/burger.js');


router.get('/', function (req, res) {
    burgers.selectAll(function (burger_data) {
        console.log(burger_data);
        res.render('index', { burger_data });
    })

});

router.post('/burgers/create', function (req, res) {
    burgers.insertOne(req.body.burger_name, function (Result) {

        res.redirect('/');
    })
});

router.put('/burgers/update', function (req, res) {
    //result. changed rows??
    burgers.updateOne(req.body.burger_id, function (result) {

        res.redirect('/');
    });

});
module.exports = router;