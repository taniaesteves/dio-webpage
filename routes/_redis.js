const express = require('express');
const router = express.Router();

// Get Articles Page
router.get('/', function(req, res){
  res.render('redis', {path: 'redis', usecase: 'true'});
});

router.get('/how2run', (req, res) => {
    res.render('redis/how2run', {path: 'redis', usecase: 'true'});
});

router.get('/portfolio', (req, res) => {
    res.render('redis/portfolio', {path: 'redis', usecase: 'true' });
});


module.exports = router;