var mongoose = require('mongoose'),
    seedData = require('../models/seedData');

var burgerSchema = mongoose.Schema({ 
    name: { 
        type: String,
        validate: function (input) {
            return (input.length > 5 && input.length <= 50);
        },
        required: true,
        require: '{PATH} is required',
        message: '{PATH} Name should be between 5 and 50 symbols'
    }, 
    burgerSize: {
        type: String,
        validate: function (input) {
           return (input.length > 0 && input.length <= 6);
        },
        required: true,
        require: '{PATH} is required',
        message: '{PATH} Burger size should be small, medium or large'
    },
    ingredients: [{
        type: String,
        required: true,
    }],
    sauces: [{
        type: String,
        required: false,
    }], 
    imageUrl: {
        type: String,
        required: true,
    },
    burgerId: {
        type: String,
        required: true,
    },
    createdOn: {type: Date, default: Date.now}
});

var Burger = mongoose.model('Burger', burgerSchema);

function burgerSeed() {
    Burger.find({}).exec(function (error, collection) {
        if (error) {
            // An error occured
            console.log('+++ burgerSeed +++ An error occured = ' + error);
        }

        var burgers = seedData.burgersSeed();

        burgers.forEach(function(burger) {
            Burger.create(burger);
        }, this);

    });
}

module.exports.seedInitialBurgers = function () {
    setTimeout(burgerSeed, 1200);
};