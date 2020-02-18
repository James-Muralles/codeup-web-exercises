(function () {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {

        firstName: "Jimmy",
        lastName: "Muralles"

    }


    person.sayHello = function () {
        return "Hello from " + person.firstName + " " + person.lastName + "!"
    }
    console.log(person.sayHello());

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

//     function discount() {
//         var newPrice = 0;
//         var oldPrice;
//         for (var i = 0; i < shoppers.length; i++) {
//             var moneyOff = (shoppers[i].amount * .12)
//             if (shoppers[i].amount > 200) {
//                 oldPrice = shoppers[i].amount;
//                 newPrice = shoppers[i].amount - (moneyOff);
//                 shoppers[i].amount = newPrice;
//
//                 console.log("Original price: " + oldPrice + " " + shoppers[i].name + ' ' + "paid " + shoppers[i].amount + " with a discount of " + moneyOff)
//
//             } else {
//                 console.log("Original price: " + shoppers[i].amount + " " + shoppers[i].name + " " + "paid " + shoppers[i].amount + " with no discount")
//             }
//         }
// return moneyOff
//
//     }
//     console.log(discount());

    function discountChecker(shoppers) {
        shoppers.forEach(function (shopper) {
            if (shopper.amount > 200) {
                console.log("shopper " + shopper.name + " has earned 12 % off by having cart totalling " + shopper.amount.toFixed(2) + ". After the discount of $" + (shopper.amount * .12).toFixed(2) + " was applied, " + shopper.name + " owes " + "$" + (shopper.amount - (shopper.amount * .12)) + ".")
            } else {
                console.log("Original price: " + shopper.amount + " " + shopper.name + " " + "paid " + shopper.amount + " with no discount.")
            }
        })
    }
    discountChecker(shoppers);


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    // var books = [
    //     {
    //         title: 'Batman',
    //         author: {
    //             firstName: 'Tom',
    //             lastName: 'King',
    //         }
    //     },
    // {
    //     title: 'Superman',
    //     author: {
    //         firstName: 'Frank',
    //             lastName: 'Miller'
    //                 }
    // },
    // {
    //     title: 'Fantastic Four',
    //     author: {
    //         firstName: 'Stan',
    //             lastName:'Lee',
    //                 }
    // },
    // {
    //     title: 'Spider Man',
    //     author: {
    //         firstName: 'Steve',
    //             lastName:'Dikto'
    //                 }
    // },
    //     {
    //         title: 'Harry Potter',
    //         author: {
    //             firstName: 'J.K',
    //             lastName:'Rowling'
    //         }
    //     }
    //
    //
    // ]
    //     console.log(books[4].title)

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
// books.forEach(function(book) {
//     console.log("Books Number: " + (books.indexOf(book) + 1) + " " + '\nBook Title: ' + book.title + '\nBook author: ' + book.author.firstName + " " + book.author.lastName)
// });


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    var title = prompt("Enter book title: ");
    var authorFirst = prompt("Enter book author first name: ");
    var authorLast = prompt("Enter book author last name: ")

    function createBook() {
        var bookArr = [
            {
                title: title,
                author: {
                    authorFirst: authorFirst,
                    authorLast: authorLast,
                }
            }
        ]
        return bookArr;
    }

    console.log(createBook());

})();
