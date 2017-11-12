// server.js
var env = process.env.NODE_ENV || 'dev'

const express = require('express');
const database = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const config = require('./app/server/config/config')[env];

const app = express();

require('./app/server/config/express')(app, config);
require('./app/server/config/mongoose')(config);
require('./app/server/config/routes')(app, database);

