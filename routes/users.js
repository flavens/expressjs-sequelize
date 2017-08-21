var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res) {
  models.user.findAll().then(function(users) {
    res.render("users", {"title": "Users", "users": users});
  });
});

router.get('/json', function(req, res) {
  models.user.findAll().then(function(users) {
    res.json(users);
  });
});

router.get('/:id', function(req, res) {
  models.user.findAll({
    where: {
      "id": req.params.id
    }
  }).then(function(user) {
    res.json(user)
  });
});

router.post('/', function(req, res) {
  var user = req.body.user;
  models.user.create(user).then(function() {
    res.redirect('users');
  });
});


router.put('/:id', function(req, res) {
  models.user.update({
    where: {
      "id": req.params.id
    }
  }).then(function() {
    res.redirect('/');
  });
});

router.delete('/:id', function(req, res) {
  models.user.delete({
    where: {
      "id": req.params.id
    }
  }).then(function() {
    res.redirect('/');
  })
});


module.exports = router;
