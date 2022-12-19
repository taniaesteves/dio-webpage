const express = require('express');
const router = express.Router();

// Get Articles Page
router.get('/', function(req, res){
  res.render('fluentbit', {path: 'fluentbit', usecase: 'true'});
});

router.get('/how2run', (req, res) => {
    res.render('fluentbit/how2run', {path: 'fluentbit', usecase: 'true'});
});

router.get('/portfolio', (req, res) => {
    res.render('fluentbit/portfolio', {path: 'fluentbit', usecase: 'true' });
});


module.exports = router;