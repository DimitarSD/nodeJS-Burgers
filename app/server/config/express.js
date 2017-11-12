'use strict';

var express = require('express'),
    bodyParser = require('body-parser');

module.exports = function (app, config) {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.listen(process.env.PORT || 5000, () => {
        console.log('Server is running on port ' + config.port);
    });
};