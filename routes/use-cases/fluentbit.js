const express = require('express');
const router = express.Router();

// Get Articles Page
router.get('/', function(req, res){
  res.render('use-cases/fluentbit/description');
});

router.get('/how2run', (req, res) => {
    res.render('use-cases/fluentbit/how2run');
});

router.get('/portfolio', (req, res) => {
    res.render('use-cases/fluentbit/portfolio');
});


module.exports = router;