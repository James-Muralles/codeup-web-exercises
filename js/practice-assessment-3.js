'use strict'
//
// #Loops, Arrays, & Objects
//
// ##Basic Review
//
// 1. What is an array in Javascript?
//
//     2. What is an object in Javascript?
//
//     3. What is the difference between an array and an object?
//
//     4. What is a property? A method?
//
//     5. Why are loops useful when dealing with arrays?
//
//     6. What is an index?
//
//     7. What is the difference between dot and bracket notation?
//
//
//     ## Practice Problems
// 1.  Write a function, `filterNumbers()` that takes in an array of mixed data types and returns an array of only the numbers type in ascending order.
function filterNumber(arr) {
    var empty = [];
    for (var i = 0; i < arr.length; i++) {
        if (!isNaN(parseFloat(arr[i])) && typeof arr[i] !== 'string') { //or typeof arr[i] === 'numbers'
            empty.push(arr[i]);
        }

    }
    return empty.sort(function(a,b){
        return a-b;
    })

}
console.log(filterNumber([100, 1000000, false, "red", true, 50, 500000, 3]));
console.log(filterNumber([6, 2, 7, 8, 9, 'a', "sfs", "1", 2, 3, 4, 5, 6, 7]));
//     ```js
console.log(filterNumber(["fred", true, 5, 3])); //[3, 5]
//     ```
//
// 2. Write a function, `getOlder()` that takes in array of dog objects and increases the value of the age properties by 1.

//
//     ```js
//     //Example Input:
var dogsList =
    [
        {
            name: "Chompers",
            breed: "Pug",
            age: 7
        },
        {
            name: "Freddy",
            breed: "Lab",
            age: 4
        },
        {
            name: "Mr. Pig",
            breed: "Mastif",
            age: 10
        }
    ];

// function getOlder(arr) {
//     for (var i = 0; i < dogs.length; i++) {
//         dogs[i].age = dogs[i].age + 1
//     }
//     return dogs
// }
//
//
// console.log(getOlder(dogs));

function getOlder(dogs) {
    dogs.forEach(function (dog) {
        dog.age = dog.age + 1;
    });
    return dogs
}

console.log(getOlder(dogsList));

//    ```
//     ```js
//     //Example output
//      [
//         {
//              name: "Chompers",
//              breed: "Pug",
//              age: 8
//          },
//          {
//              name: "Freddy",
//              breed: "Lab",
//              age: 5
//          },
//          {
//              name: "Mr. Pig",
//              breed: "Mastif",
//              age: 11
//          }
//      ];
//    ```
//
// 3. Write a function, `washCars()` that takes in a array of car objects and sets the boolean properties of isDirty to false

//     ```js
//             // Example input
var carList =
    [
        {
            make: 'Volvo',
            color: 'red',
            year: 1996,
            isDirty: true
        },
        {
            make: 'Toyota',
            color: 'black',
            year: 2004,
            isDirty: false
        },
        {
            make: 'Ford',
            color: 'white',
            year: 2007,
            isDirty: true
        }
    ]
// function washCars(arr) {
//     for (var i = 0; i < cars.length; i++) {
//         cars[i].isDirty = false
//     }
//     return cars
// }
//
// console.log(washCars(cars));

function washCars(cars) {
    cars.forEach(function (car) {
        car.isDirty = false
    });
    return cars
}

console.log(washCars(carList));
//       ```
//
//     ```js
//             // Example output:
//              [
//                  {
//                      make: 'Volvo',
//                      color: 'red',
//                      year: 1996,
//                      isDirty: false // changed to false
//                  },
//                  {
//                      make: 'Toyota',
//                      color: 'black',
//                      year: 2004,
//                      isDirty: false // stays the same
//                  },
//                  {
//                      make: 'Ford',
//                      color: 'white',
//                      year: 2007,
//                      isDirty: false // changed to false
//                  }
//              ]
//     ```
//
// 4. Write a function, `adminList()` that takes in an array of user objects and returns a count of all admins based on the isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.
//     ```js
//          //Example Input:
var userObjects =
    [
        {
            isAdmin: true,
            email: 'user1@email.com'
        },
        {
            isAdmin: true,
            email: 'user2@email.com'
        },
        {
            isAdmin: false,
            email: 'user3@email.com'
        }
    ];

// function adminList (arr) {
//    var empty = [];
//     for (var i = 0; i < userObjects.length; i++) {
//         if(userObjects[i].isAdmin === true ){
// empty.push(userObjects[i]);
//
//         }
//     }
//         return empty.length
// }
//     console.log(adminList(userObjects));

// function adminList(arr) {
//     var bucket = [];
//     userObjects.forEach(function (user) {
//         if (user.isAdmin) {
//             bucket.push(user);
//         }
//     });
//     return bucket.length
// }
//
// console.log(adminList(userObjects));

function adminList (arr) {
    var empty = [];
    for (var i = 0; i < userObjects.length; i++) {
        if(userObjects[i].isAdmin === true ){
            empty.push(userObjects[i].email);
        }
    }
    return empty
}
console.log(adminList(userObjects));

// function adminList (arr) {
//     var empty = [];
//     for (var i = 0; i < userObjects.length; i++) {
//         if(userObjects[i].isAdmin === true ){
//             empty.push(userObjects[i]);
//             // console.log(empty);
//         }
//     }
//     return empty
// }
// console.log(adminList(userObjects));
//     ```

//     ```js
//        // Example Output (before refactor): 2
//
//
//         // Example Output (after 1st refactor):
//         [
//             'user1@email.com',
//             'user2@email.com'
//         ]
//
//
//         // Example Output (after 2nd refactor):
//         [
//              {
//                  isAdmin: true,
//                  email: 'user1@email.com'
//              },
//              {
//                  isAdmin: true,
//                  email: 'user2@email.com'
//              }
//          ]
//
//     ```
//
// 5. Create a function, `makeSandwichObjects()` that takes in two array of strings, breads and fillings and returns an array of sandwichObjects that contain properties for bread and filling and values correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length.
//
//     ```js
//         //     Example Input:
//
// var breadStuff
var breads = [
    "white",
    "wheat",
    "rhy",
    "white"

];

var fillings = [
    "pb&j",
    "ham",
    "cheese steak",
    "tuna"
];

// function makeSandwichObjects (bread, filling) {
//     var newObj = [];
//     for(var i = 0; i < breads.length; i++) {
//         for ( var j= 0; j <= fillings.length; j++){
//             if (breads.indexOf(breads[i]) === fillings.indexOf(fillings[j])){
//                 newObj.push({bread: breads[i], fillings: fillings[j]})
//             }
//         }
//     }
//     return newObj

function makeSandwichObjects(breads, fillings) {
    var sandwiches = [];
    for (var i = 0; i < breads.length; i++) {
        sandwiches.push({bread: breads[i], filling: fillings[i]});
    }
    return sandwiches;
}

console.log(makeSandwichObjects(breads, fillings));

//
//          makeSandwichObjects(breads, fillings) // example call to the function
//     ```
//     ```js
//         // Example Output:
//            [
//              {
//                  bread: "white",
//                  filling: "pb&j"
//              },
//              {
//                  bread: "wheat",
//                  filling: "ham"
//              },
//              {
//                  bread: "rhy",
//                  filling: "cheese steak"
//              },
//              {
//                  bread: "white",
//                  filling: "tuna"
//              }
//          ]
//
//     ```

// TODO Write a function named keepYellow that accepts an array of strings and returns an array with all the strings that are equal to "yellow"
// console.log(keepYellow(["yellow", "red", "blue", "yellow", "black", "brown", "yellow"]));

function keepYellow (arr) {
   var empty = [];
    arr.forEach(function(string){
        if (string === 'yellow') {
            empty.push(string);
        }
    });
        return empty

}

console.log(keepYellow(["yellow", "red", "blue", "yellow", "black", "brown", "yellow"]));

