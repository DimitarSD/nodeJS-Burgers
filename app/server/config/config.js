'use strict';

var path = require('path'),
    rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    dev: {
        rootPath: rootPath,
        databaseAddress: 'mongodb://127.0.0.1:27017/burgers',
        port: process.env.PORT || 5000
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://admin:admin123@ds159845.mlab.com:59845/nodejs-burgers',
        port: process.env.PORT || 5000
    },
}