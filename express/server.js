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
router.get('/redis', function(req, res){
    res.sendFile('redis.html', { root: views });
});
router.get('/elasticsearch', function(req, res){
    res.sendFile('elasticsearch.html', { root: views });
});
router.get('/rocksdb', function(req, res){
    res.sendFile('rocksdb.html', { root: views });
});
router.get('/fluentbit', function(req, res){
    res.sendFile('fluentbit.html', { root: views });
});
router.get('/usage', function(req, res){
    res.sendFile('usage.html', { root: views });
});
router.get('/faq', function(req, res){
    res.sendFile('faq.html', { root: views });
});
router.get('/contact', function(req, res){
    res.sendFile('contact.html', { root: views });
});

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda (express/server.js)

module.exports = app;
module.exports.handler = serverless(app);
