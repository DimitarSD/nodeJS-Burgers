'use strict';

var path = require('path'),
    rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    dev: {
        rootPath: rootPath,
        databaseAddress: 'mongodb://127.0.0.1:27017/burgers',
        port: 1234
    },
}