const express = require('express');
const router = express.Router();

// Get Articles Page
router.get('/', function(req, res){
  res.render('docs/about');
});

// router.get('/how2run', (req, res) => {
//     res.render('docs/about/how2run');
// });

// router.get('/portfolio', (req, res) => {
//     res.render('docs/about/portfolio');
// });


module.exports = router;