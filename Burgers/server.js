// server.js

const express = require('express');
const database = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const config = require('./app/server/config/config')['dev'];

const app = express();

require('./app/server/config/express')(app, config);
require('./app/server/config/mongoose')(config);
require('./app/server/config/routes')(app, database);

