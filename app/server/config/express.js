'use strict';

var express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser');

module.exports = function (app, config) {
    app.use(cors());
    app.use(function (request, response, next) {
        // Website you wish to allow to connect
        response.setHeader('Access-Control-Allow-Origin', '*');
        
        // Request methods you wish to allow
        response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        
        // Request headers you wish to allow
        response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
        
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        response.setHeader('Access-Control-Allow-Credentials', true);
        
        // Pass to next layer of middleware
        next();
    });

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(config.port, () => {
        console.log('Server is running on port ' + config.port);
    });
};