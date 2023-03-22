const express = require('express');
const router = express.Router();

// Get Articles Page
router.get('/', function(req, res){
  res.render('use-cases/redis/description');
});

router.get('/how2run', (req, res) => {
    res.render('use-cases/redis/how2run');
});

router.get('/portfolio', (req, res) => {
    res.render('use-cases/redis/portfolio');
});


module.exports = router;