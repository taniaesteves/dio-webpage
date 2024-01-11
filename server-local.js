'use strict';
const express = require('express');
const app = require('./express/server');
const path = require('path');

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, "public")))


// Local request handlers.
app.get('/', (req, res) => {
  res.render('index', {path: req.path});
});

// Route Files.
let redis = require('./routes/use-cases/redis');
let elasticsearch = require('./routes/use-cases/elasticsearch');
let rocksdb = require('./routes/use-cases/rocksdb');
let fluentbit = require('./routes/use-cases/fluentbit');
let about = require('./routes/docs/about');
let installation = require('./routes/docs/installation');
let installationPipeline = require('./routes/docs/installation/pipeline');
let installationTracer = require('./routes/docs/installation/tracer');
let syscalls = require('./routes/docs/syscalls');
let contacts = require('./routes/contacts');
app.use('/use-cases/redis', redis);
app.use('/use-cases/elasticsearch', elasticsearch);
app.use('/use-cases/rocksdb', rocksdb);
app.use('/use-cases/fluentbit', fluentbit);
app.use('/docs/about', about);
app.use('/docs/installation', installation);
app.use('/docs/installation/pipeline', installationPipeline);
app.use('/docs/installation/tracer', installationTracer);
app.use('/docs/syscalls', syscalls);
app.use('/contacts', contacts);

// Start Server.
let port = 3005;
app.listen(port, function(){
  console.log(`Server started on port ${port}...`);
});