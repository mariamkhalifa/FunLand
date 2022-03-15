var express = require('express');
var path = require('path'); //had to add
var router = express.Router();

var mongoose = require('mongoose');
var Attraction = require('../models/Attraction');

// routes 

router.get('/api/attractions', function(req, res, next){
    Attraction.find(function(err, attractions){
        if(err) return next(err);
        res.json(attractions);
    });
});

router.get('/api/attraction/:id', function(req, res, next){
    Attraction.findById(req.params.id, function(err, attraction){
        if(err) return next(err);
        res.json(attraction);
    });
});

module.exports = router;