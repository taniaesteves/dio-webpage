const express = require('express');
const router = express.Router();

// Get Articles Page
router.get('/', function(req, res){
  res.render('elasticsearch', {path: 'elasticsearch', usecase: 'true'});
});

router.get('/how2run', (req, res) => {
    res.render('elasticsearch/how2run', {path: 'elasticsearch', usecase: 'true'});
});

router.get('/portfolio', (req, res) => {
    res.render('elasticsearch/portfolio', {path: 'elasticsearch', usecase: 'true' });
});


module.exports = router;