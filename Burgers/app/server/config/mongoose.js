'use strict';

var mongoose = require('mongoose'),
    models = require('../models');

module.exports = function (config) {
    mongoose.connect(config.databaseAddress);
    var database = mongoose.connection;

    database.once('open', function (error) {
        if (error) {
            console.log('Database could not be opened: ' + error);
            return;
        }

        // mongoose.connection.db.dropDatabase();
        console.log('Database up and running...');
    });

    database.on('error', function (error) {
        console.log('Database error: ' + error);
    });

    // Seed initial data
    // models.Burger.seedInitialBurgers();
};

