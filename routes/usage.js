const express = require('express');
const router = express.Router();

// Get Articles Page
router.get('/', function(req, res){
  res.render('usage', {path: req.path});
});

module.exports = router;