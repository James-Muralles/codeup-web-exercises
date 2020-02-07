"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
function numberConfirm (number) {
var confirmnumber = confirm("Would you like to enter a number?");
if (confirmnumber === true) {
    var numberentered = Number(prompt("Enter a number"));

    if (numberentered % 2) {
        alert("That number is odd");
    }
    if ((numberentered % 2 === 0)) {
        alert('That number is even')
    }
    if (numberentered > 0) {
        alert("number is positive")
    }
    if (numberentered < 0) {
        alert("number is negative")
    }
    if (!isNaN(numberentered)) {
        alert("This number plus 100 is " + (Number(100) + numberentered));
    } else if (isNaN(numberentered)) {
        alert("Is not a number");

    }
}
return number;

}

console.log(numberConfirm(23));
/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor (color) {
   if (color === 'blue') {
       return 'blue is the color of the sky'
   }
   if (color === 'red') {
       return 'strawberries are red'
   }
   if (color === 'cyan') {
       return 'I dont know anything about cyan'
   }
   else {
       return 'Do you even know colors?'
   }
}
console.log(analyzeColor('yellow'));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function analyzeColor () {
    var color = prompt("choose a color");
    switch (color) {
    case "blue":
        alert ('blue is the color of the sky');
        break;
    case "red":
        alert('strawberries are red');
        break;
    case "cyan":
        alert ('I dont know anything about cyan');
        break;
        default:
        alert ('Do you even know colors?');
        break;
    }
    return color;
}
console.log(analyzeColor());
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// function calculateTotal(luckyNumber, total){
//     if(luckyNumber === 0) {
//         return total;
//     }else if(luckyNumber === 1){
//         return total - (total * .10);
//     }else if(luckyNumber === 2) {
//         return total - (total * .25);
//     }else if(luckyNumber === 3) {
//         return total - (total * .35);
//     }else if(luckyNumber === 4) {
//         return total - (total * .50);
//     }else if(luckyNumber === 5) {
//         return "Everything is free!"
//     }else {
//         return "sorry, I don't understand"
//     }
// }
// console.log(calculateTotal(4, 20));

function calculateTotal(luckyNumber, total){
    var discount;
    switch (luckyNumber){
        case 0:
            alert("You get no discount");
            break;
        case 1:
         discount = .1 * total;
           alert ("10% off, your discount is $" + discount);
          break;
        case 2:
            discount = .25 * total;
            alert ("25% off, your discount is $" + discount);
            break;
        case 3:
            discount = .35 * total;
            alert ("35% off, your discount is $" + discount);
            break;
        case 4:
            discount = .5 * total;
            alert ("50% off, your discount is $" + discount);
            break;
        case 5:
            discount = .1 * total;
            alert ("100% off, your discount is free.99");
            break;
        default:
            alert("This isn't real")
    }
    return discount;
}

console.log(calculateTotal(2, 40));
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

// function calculateTotal(){
//     var discount;
// var luckyNumber = Math.floor(Math.random() * 6);
// var total = Number(prompt("Enter your bill total"))
//     switch (luckyNumber){
//         case 0:
//             alert("You get no discount. Your bill is" + total);
//             break;
//         case 1:
//             discount = .1 * total;
//             alert ("10% off, your discount is $" + discount.toFixed(2) + ". Your lucky number was " + luckyNumber + ". Your bill was $" + total + ". Your bill after the discount is $" + (total-discount).toFixed(2));
//             break;
//         case 2:
//             discount = .25 * total;
//             alert ("25% off, your discount is $" + discount.toFixed(2) + ". Your lucky number was " + luckyNumber + ". Your bill was $" + total + ". Your bill after the discount is $" + (total-discount).toFixed(2));
//             break;
//         case 3:
//             discount = .35 * total;
//             alert ("35% off, your discount is $" + discount.toFixed(2) + ". Your lucky number was " + luckyNumber + ". Your bill was $" + total + ". Your bill after the discount is $" + (total-discount).toFixed(2));
//             break;
//         case 4:
//             discount = .5 * total;
//             alert ("50% off, your discount is $" + discount.toFixed(2) + ". Your lucky number was " + luckyNumber + ". Your bill was $" + total + ". Your bill after the discount is $" + (total-discount).toFixed(2));
//             break;
//         case 5:
//             discount = total;
//             alert ("100% off, your discount is $" + discount.toFixed(2) + ". Your lucky number was " + luckyNumber + ". Your bill was $" + total + ". Your bill after the discount is $" + (total-discount).toFixed(2));
//             break;
//         default:
//             alert("This isn't real")
//     }
//     return discount.toFixed(2);
// }
//
// console.log(calculateTotal());
