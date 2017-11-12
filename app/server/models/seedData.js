'use strict';

function burgersSeed() {
    var burgers = [
        {
            name: 'Crispy Chicken Burger',
            burgerSize: 'large',
            ingredients: ['chicken', 'onion', 'tomatoes', 'pepper', 'lettuce'],
            sauces: ['mustard'],
            imageUrl: 'http://bk-apac-prd.s3.amazonaws.com/sites/burgerking.co.nz/files/BUR2060C.Webtiles.500x400.CrispyChickenBurger.png',
            burgerId: 'cghadiw2rv07yamm'
        },
        {
            name: 'Big Mac',
            burgerSize: 'medium',
            ingredients: ['beef meat', 'onion', 'tomatoes', 'cucumber', 'fries'],
            sauces: ['ketchup', 'mustard'],
            imageUrl: 'http://img.sndimg.com/food/image/upload/w_560,h_420,c_fill,fl_progressive,q_80/v1/img/recipes/92/02/1/8wimK3LVR5yUgXYUZImK_DSC_0473-2.jpg',
            burgerId: 'uhhadiw2rv07j3rq'
        },
        {
            name: 'Crispy Chicken Burger',
            burgerSize: 'small',
            ingredients: ['chicken', 'onion', 'tomatoes', 'pepper', 'lettuce'],
            sauces: ['mustard'],
            imageUrl: 'https://spokane.eat24hours.com/files/cuisines/v4/burgers.jpg',
            burgerId: 'cghadiy66v07yamm'
        },
        {
            name: 'Big Mac',
            burgerSize: 'medium',
            ingredients: ['chicken', 'cheese', 'bacon', 'onion', 'tomatoes', 'cucumber', 'fries'],
            sauces: [],
            imageUrl: 'http://themocracy.com/wp-content/uploads/2016/08/Burger.jpg',
            burgerId: 'uhhadplm9v07j3rq'
        }
    ];

    return burgers;
}

module.exports = {
    burgersSeed: burgersSeed
}