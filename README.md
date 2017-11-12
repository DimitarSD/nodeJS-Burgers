# Burgers

1. Root endpoint: https://fast-sea-98150.herokuapp.com/

| HTTP Method |       Web service endpoint       |                       Description                       |
|:-----------:|:--------------------------------:|:-------------------------------------------------------:|
|     GET     | /                                | Gets homepage                                           |
|     GET     | /burgers                         | Gets all burgers                                        |
|     POST    | /burger/add                      | Create new burger                                       |
|     GET     | /burger/:name                    | Find and gets a burger by its name                      |
|     GET     | /burger/ingredients/:ingredients | Returns all burgers containing the desired ingredients  |
|     GET     | /burger/id/:burgerId             | Gets a burger by its id                                 |

## Examples
1. Gets all burgers: https://fast-sea-98150.herokuapp.com/burgers
```json
[  
   {  
      "_id":"5a0871d773d0cc001207419e",
      "name":"Crispy Chicken Burger",
      "burgerSize":"large",
      "imageUrl":"http://bk-apac-prd.s3.amazonaws.com/sites/burgerking.co.nz/files/BUR2060C.Webtiles.500x400.CrispyChickenBurger.png",
      "burgerId":"cghadiw2rv07yamm",
      "__v":0,
      "createdOn":"2017-11-12T16:07:51.840Z",
      "sauces":[  
         "mustard"
      ],
      "ingredients":[  
         "chicken",
         "onion",
         "tomatoes",
         "pepper",
         "lettuce"
      ]
   },
   {  
      "_id":"5a0871d773d0cc001207419f",
      "name":"Big Mac",
      "burgerSize":"medium",
      "imageUrl":"http://img.sndimg.com/food/image/upload/w_560,h_420,c_fill,fl_progressive,q_80/v1/img/recipes/92/02/1/8wimK3LVR5yUgXYUZImK_DSC_0473-2.jpg",
      "burgerId":"uhhadiw2rv07j3rq",
      "__v":0,
      "createdOn":"2017-11-12T16:07:51.850Z",
      "sauces":[  
         "ketchup",
         "mustard"
      ],
      "ingredients":[  
         "beef meat",
         "onion",
         "tomatoes",
         "cucumber",
         "fries"
      ]
   },
   {  
      "_id":"5a0871d773d0cc00120741a0",
      "name":"Crispy Chicken Burger",
      "burgerSize":"small",
      "imageUrl":"https://spokane.eat24hours.com/files/cuisines/v4/burgers.jpg",
      "burgerId":"cghadiy66v07yamm",
      "__v":0,
      "createdOn":"2017-11-12T16:07:51.851Z",
      "sauces":[  
         "mustard"
      ],
      "ingredients":[  
         "chicken",
         "onion",
         "tomatoes",
         "pepper",
         "lettuce"
      ]
   },
   {  
      "_id":"5a0871d773d0cc00120741a1",
      "name":"Big Mac",
      "burgerSize":"medium",
      "imageUrl":"http://themocracy.com/wp-content/uploads/2016/08/Burger.jpg",
      "burgerId":"uhhadplm9v07j3rq",
      "__v":0,
      "createdOn":"2017-11-12T16:07:51.851Z",
      "sauces":[  

      ],
      "ingredients":[  
         "chicken",
         "cheese",
         "bacon",
         "onion",
         "tomatoes",
         "cucumber",
         "fries"
      ]
   }
]
```
2. Add new burger: https://fast-sea-98150.herokuapp.com/burger/add
```json
{
	"name":"Big Billy Burger 4",
	"burgerSize":"large",
	"imageUrl":"https://media-cdn.tripadvisor.com/media/photo-s/07/50/f6/d1/john-s-burger.jpg",
	"sauces":["ketchup", "mustard"],
	"ingredients":["beef meat","egg","bacon","cucumber","fries", "tomatoes", "chilly"]
}
```
3. Get burgers with ingredients: https://fast-sea-98150.herokuapp.com/burger/ingredients/bacon,cheese
```json
[  
   {  
      "_id":"5a0871d773d0cc00120741a1",
      "name":"Big Mac",
      "burgerSize":"medium",
      "imageUrl":"http://themocracy.com/wp-content/uploads/2016/08/Burger.jpg",
      "burgerId":"uhhadplm9v07j3rq",
      "__v":0,
      "createdOn":"2017-11-12T16:07:51.851Z",
      "sauces":[  

      ],
      "ingredients":[  
         "chicken",
         "cheese",
         "bacon",
         "onion",
         "tomatoes",
         "cucumber",
         "fries"
      ]
   }
]
```
