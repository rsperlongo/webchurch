const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Members = ('../models/Members.js');

router.get('/', function(req, res, next) {
  res.send('Express RESTful API');
});

 router.get('/', function(req, res, next) {
  Members.find(function(err, members) {
    if(err) return next(err);
    res.json(members);
  });
});

router.get('/:id', function(req, res, next) {
  Members.findbyId(req.params.id, function(err, post) {
    if(err) return next(err);
    res.json(post);
  });
});

router.post('/', function(req, res, next) {
  Members.create(req.body, function(err, post) {
    res.json(post);
  });
});

router.delete('/:id', function(req, res, next) {
  Members.findByIdAndRemove(req.params.id, req.body, function(err, post) {
    if(err) return next(err);
    res.json(post)
  });
});

module.exports = router;
