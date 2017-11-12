'use strict';

var security = require('../utilities/security'),
    helper = require('../utilities/help-functions'),
    Burger = require('mongoose').model('Burger');

function addBurger(request, response) {
    var uuid = helper.generateUUID();

    var burger = {
        name: security.handleHtmlTags(request.body.name),
        burgerSize: security.handleHtmlTags(request.body.burgerSize),
        ingredients: request.body.ingredients,
        sauces: request.body.sauces,
        imageUrl: security.handleHtmlTags(request.body.imageUrl),
        burgerId: uuid
    };

    Burger.create(burger, function (error, burger) {
        if (error) {
            // An error occured
            console.log('+++ addBurger +++ An error occured = ' + error);

            return;
        }

        response.send('New Burger added = ' + burger);
    });
}

function getAllBurgers(request, response) {
    Burger.find({}).exec(function (error, collection) {
        if (error) {
            // An error occured
            console.log('+++ getAllBurgers +++ An error occured = ' + error);

            return;
        }

        response.send(collection);
    });
}

function getBurgerByName(request, response) {
    var burgerName = security.handleHtmlTags(request.params.name);

    Burger.findOne({name: burgerName}, function (error, burger) {
        if (error) {
            // An error occured
            console.log('+++ getBurgerByName +++ An error occured = ' + error);
            
            return;
        }

        if (!burger) {
            response.send('Burger not found with name = ' + burgerName);

            return;
        }

        var findedBurger = {
            name: burger.name,
            burgerSize: burger.burgerSize,
            ingredients: burger.ingredients,
            sauces: burger.sauces,
            imageUrl: burger.imageUrl,
            burgerId: burger.burgerId
        }

        response.send(findedBurger);
    });
}

function getBurgerWithIngredients(request, response) {
    var requestIngredients = helper.splitText(request.params.ingredients, ',');
    var burgers = [];

    Burger.find({}).exec(function (error, collection) {
        if (error) {
            // An error occured
            console.log('+++ getAllBurgers +++ An error occured = ' + error);

            return;
        }

        collection.forEach(function(burger) {
            let isContainingIngredients = requestIngredients.some(ingredient => burger.ingredients.includes(ingredient));

            if (isContainingIngredients) {
                burgers.push(burger)
            }
        }, this);

        response.send(burgers);
    });
}

function getBurgerById(request, response) {
    var burgerId = security.handleHtmlTags(request.params.burgerId);

    Burger.findOne({burgerId: burgerId}, function (error, burger) {
        if (error) {
            // An error occured
            console.log('+++ getBurgerById +++ An error occured = ' + error);
            
            return;
        }

        if (!burger) {
            response.send('Burger not found for id = ' + burgerId);

            return;
        }

        response.send(burger);
    });
}

module.exports = {
    addBurger: addBurger,
    getAllBurgers: getAllBurgers,
    getBurgerByName: getBurgerByName,
    getBurgerWithIngredients: getBurgerWithIngredients,
    getBurgerById: getBurgerById
}