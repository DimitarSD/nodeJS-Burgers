'use strict';

var services = require('../services'),
    path = require('path');

module.exports = function(app, db) {
    // Routes 

    app.get('/', (request, response) => { response.send('Homepage'); });
    app.get('/burgers', services.BurgerServices.getAllBurgers);
    app.post('/burger/add', services.BurgerServices.addBurger);
    app.get('/burger/:name', services.BurgerServices.getBurgerByName);
    app.get('/burger/ingredients/:ingredients', services.BurgerServices.getBurgerWithIngredients);
    app.get('/burger/id/:burgerId', services.BurgerServices.getBurgerById);

    // Favicon
    app.get('/favicon.ico', function (req, res) {
        res.sendFile(path.resolve(__dirname + '/../../favicon.ico'))
    });
};