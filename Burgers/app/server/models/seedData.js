'use strict';

function burgersSeed() {
    var burgers = [
        {
            name: 'Crispy Chicken Burger',
            burgerSize: 'large',
            ingredients: ['chicken', 'onion', 'tomatoes', 'pepper', 'lettice'],
            sauces: ['mustard'],
            imageUrl: 'http://bk-apac-prd.s3.amazonaws.com/sites/burgerking.co.nz/files/BUR2060C.Webtiles.500x400.CrispyChickenBurger.png',
            burgerId: 'h673n3862na14a77ds5gbid8lx8s'
        },
        {
            name: 'Big Mac',
            burgerSize: 'medium',
            ingredients: ['beef meat', 'onion', 'tomatoes', 'cucumber', 'fries'],
            sauces: ['ketchup', 'mustard'],
            imageUrl: 'http://img.sndimg.com/food/image/upload/w_560,h_420,c_fill,fl_progressive,q_80/v1/img/recipes/92/02/1/8wimK3LVR5yUgXYUZImK_DSC_0473-2.jpg',
            burgerId: 'h673n3862na14a77ds5gbid86w33'
        }
    ];

    return burgers;
}

module.exports = {
    burgersSeed: burgersSeed
}