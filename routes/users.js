const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    message: "This is the endpoiint"
  });
});

router.get('/api/user', function(req, res, next) {
  // TODO:
  // Searching through
  res.json({
    username: "accimeesterlin",
    age: 5,
  });
});


router.get('/api/location', function(req, res, next) {
  res.json({
    message: "This is the location"
  });
});

module.exports = router;
