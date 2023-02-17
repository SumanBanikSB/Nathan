var express = require('express');
var router = express.Router();
var database = require('./database');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { name: 'Nathan Antony Jose', age: '11' });
});

router.post('/profile', function (req, res) {
  console.log(req.body);
  database.create({
    u: req.body.username,
    p: req.body.password,
  });
  res.render('show.ejs', {
    uname: req.body.username,
    password: req.body.password,
  });
});
module.exports = router;
