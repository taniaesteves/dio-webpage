'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

// Link to views folder.
let views = path.join(__dirname, '../');

// Home route.
router.get('/', (req, res) => {
    res.sendFile('index.html', { root: views });
});

// Other routes.
// router.get('/use-cases/redis', function(req, res){
//     res.sendFile('use-cases/redis/redis.html', { root: views });
// });
// router.get('/use-cases/elasticsearch', function(req, res){
//     res.sendFile('elasticsearch/elasticsearch/elasticsearch.html', { root: views });
// });
router.get('/use-cases/rocksdb', function(req, res){
    res.sendFile('use-cases/rocksdb.html', { root: views });
});
router.get('/use-cases/fluentbit', function(req, res){
    res.sendFile('use-cases/fluentbit.html', { root: views });
});
router.get('/usage', function(req, res){
    res.sendFile('usage.html', { root: views });
});
router.get('/faq', function(req, res){
    res.sendFile('faq.html', { root: views });
});
router.get('/contacts', function(req, res){
    res.sendFile('contacts.html', { root: views });
});

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda (express/server.js)

module.exports = app;
module.exports.handler = serverless(app);
