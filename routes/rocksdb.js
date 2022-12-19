const express = require('express');
const router = express.Router();

// Get Articles Page
router.get('/', function(req, res){
  res.render('rocksdb', {path: 'rocksdb', usecase: 'true'});
});

router.get('/how2run', (req, res) => {
    res.render('rocksdb/how2run', {path: 'rocksdb', usecase: 'true'});
});

router.get('/portfolio', (req, res) => {
    res.render('rocksdb/portfolio', {path: 'rocksdb', usecase: 'true' });
});


module.exports = router;