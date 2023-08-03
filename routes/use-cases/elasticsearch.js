const express = require('express');
const router = express.Router();

// Get Articles Page
router.get('/', function(req, res){
  res.render('use-cases/elasticsearch');
});

router.get('/how2run', (req, res) => {
    res.render('use-cases/elasticsearch/how2run');
});

router.get('/portfolio', (req, res) => {
    res.render('use-cases/elasticsearch/portfolio');
});


module.exports = router;