const express = require('express');
const router = express.Router();

// Get Articles Page
router.get('/', function(req, res){
  res.render('docs/installation/pipeline');
});


module.exports = router;