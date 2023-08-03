const express = require('express');
const router = express.Router();

// Get Articles Page
router.get('/', function(req, res){
  res.render('redis');
});

router.get('/how2run', (req, res) => {
    res.render('redis/how2run');
});

router.get('/portfolio', (req, res) => {
    res.render('redis/portfolio');
});


module.exports = router;