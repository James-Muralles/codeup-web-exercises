"use strict"

// Make a function named isOdd(number)
function isOdd(number) {
    return !!(number % 2);
    // if (number % 2) {
    //     return true;
    // } else {
    //     return false;
    // }
}
console.log(isOdd(-5));

// Make a function named isEven(number)
function isEven(number) {
    return number % 2 === 0;
    // if (number % 2 === 0) {
    //     return true;
    // } else {
    //     return false;
    // }
}
console.log(isEven(10));

// Make a function named identity(input) that returns the input exactly as provided.
function identity (input) {
    return input
}
console.log(identity("hfa"));

//Make a function named isFive(input)
function isFive(input) {
    return input === 5;
}
console.log(isFive(6));

//Make a function named addFive(input) that adds five to some input.
function addFive(input) {
    return input + 5
}
console.log(addFive(5));

//Make a function named isMultipleOfFive(input)
function isMultipleOfFIve(input) {
    return !(input % 5);
}
console.log(isMultipleOfFIve(13));

// Make a function named isThree(input)
function isThree (input){
    return input == "3";
}
console.log(isThree("3"));

// Make a function named isMultipleOfThree(input)
// function

// Make a function named isMultipleOfThreeAndFive(input)
function isMultipleOfThreeAndFive(input) {
     return (input % 3 === 0 && input % 5 === 0);
}
console.log(isMultipleOfThreeAndFive(12));

// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
// function
// Make a function named isTrue(boolean)
// function
// Make a function named isFalse(boolean)
// function
// Make a function named isTruthy(input), remember that values other than true will behave like true
function isTruthy (input) {
    return input == true;
}
console.log(isTruthy(false));

// Make a function named isFalsy(input), remember that values other than false behave like false
function isFalsy(input) {
     return !!input === false;
}
console.log(isFalsy(NaN));

// Make a function named isVowel(letter)
function isVowel (letter){
    return "aeiouAEIOU".indexOf(letter) !== -1;
}
console.log(isVowel('O'));

// Make a function named isConsonant(letter)
function isConsonant (letter){
    return "aeiouAEIOU1234567890".indexOf(letter) === -1;
}
console.log(isConsonant('0'));
// Make a function named isCapital(letter)
function isCaptial (letter){
    return letter === letter.toUpperCase()
}
console.log(isCaptial("a"));
// Make a function named isLowerCase(letter)
function isLowerCase (letter) {
    return letter === letter.toLowerCase()
}

console.log(isLowerCase('H'));
// Make a function named hasLowerCase(string) that returns if a string has any lower cased letter
function hasLowerCase (str) {
    return str.toUpperCase() !== str
}

console.log(hasLowerCase("AJH"));
// Make a function named isSpace(letter) that returns if a character is a space character
function isSpace (char) {
    return char === " "
}

console.log(isSpace(" "));
// Make a function named isZero(number)
function isZero (num) {
    return num === 0;
}
console.log(isZero(1));

// Make a function named notZero(input) that returns true if the input is not zero
function notZero (input) {
    return input !== 0;
}
console.log(notZero(2));

// Write a function named lowerCase(string)
function lowerCase(str) {
    return str=== str.toLowerCase()
}
console.log(lowerCase("string"));

// Write a function named double(n) that returns a number times two
function double (n) {
    return parseFloat(n) * 2;
}

console.log(double(2));

// Write a function named triple(n) that returns a number times 3
function triple (n){
    n = n.toString();
    return n + n + n ;
}
console.log(triple(5));

// Write a function named quadruple(n) that returns a number times 4
function quadruple (n){
    n = n.toString();
    return n + n + n + n ;
}

console.log(quadruple(6));

// Write a function named half(n) that returns 1/2 of the provided input
function half(n){
    return parseFloat(n) * .5
}
console.log(half(45));

// Write a function named subtract(a, b) that returns a minus b
function subtract (a, b) {
    return parseFloat(a - b);
}
console.log(subtract());

// Write a function named multiply(a, b) that returns the product of a times b
function multiply (a, b) {
    return Number(a * b)
}

console.log(multiply(3.4, 4));

// Write a function named divide(a, b) that returns a divided by b
function divide (a, b) {
    return Number(a / b)
}

console.log(divide(3.4, 4));

// Write a function named remainder(a, b) that returns the remainder after dividing a by b
function remainder (a, b) {
    return Number(a % b)
}
console.log(remainder(4455, 6))

// Write a function named cube(n) that returns n * n * n
function cube(n) {
    return Number(n * n * n)
}
console.log(cube(4));

// Write a function named squareRoot(n) that returns the square root of the input
function squareRoot (n) {
    return Math.sqrt(n)
}
console.log(squareRoot(4));

// Write a function named cubeRoot(n) that returns the cube root of the input
function cubeRoot (n) {
    return Math.cbrt(n)
}
console.log(cubeRoot(9));

// Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.
function invertSign (n) {
    if (n === 0) {
        return  false
    }
    if (n === parseInt(n)) {
       return parseInt(n) * -1
   }

   else{
       return false
   }
}
console.log(invertSign('j'));
// Write a function named degreesToRadians(number)
function degreesToRadian(n) {
    return n * (Math.PI / 180)
}
console.log(degreesToRadian(1));

// Write a function named radiansToDegrees(number)

// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
function isBlank (input) {
return input === ' ' || input === "     "
}

console.log(isBlank("   "));

//     Make a function named trim(string) that removes empty spaces before and after the input.
function trim (str) {
    return str.trim()
}

console.log(trim("     what "));
//     Make a function named areEqual(input1, input2) that returns if both inputs have the same value
// Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.
//     Make a function named not(input) returns the input with a flipped boolean
function not (input) {
    return !input
}
console.log(not(3));
// Make a function named notNot(input) that the negation of the negation of the input.
//     Make a function named and(predicate1, predicate2) that returns the logical operation of AND
// Make a function named or(predicate1, predicate2) that returns the logical operation of OR
// Write a function called reverseString(string) that reverses a string
function reverseString(str) {
    return str.split("").reverse().join("")
}
console.log(reverseString("string"));
// Make a function named absoluteValue(number) that returns the absolute value of a number.
function absoluteValue(number) {
    return Math.abs(number);
}

console.log(absoluteValue(0));
//     Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and including the number of sides.
function rollDice () {
    return Math.floor(Math.random() * 6) + 1;
}

console.log(rollDice());

function returnTwo () {
    return 2;
}

console.log(returnTwo());

// Make a function called sayHowdy() which console.logs the string “Howdy!”
// Test this function by directly calling sayHowdy()
// Remember this function does not need a defined return value
function sayHowdy() {
    return "Howdy!"
}
console.log(sayHowdy());

// Make a function called returnName() that returns the string of your name
// Test this function with console.log(returnName())
function returnName(){
    return "Jimmy Muralles"
}

console.log(returnName());

// Make a function called addThree() which takes in a number input and returns the number plus 3.
// Test this function with console.log(addThree(5))
function addThree(input){
    return parseFloat(input) + 3
}
console.log(addThree("3"));

//     Make a function called sayString() which returns the string input passed in.
// Test this function with console.log(sayString('codeup'))
function sayString(str) {
     return str;
}
console.log(sayString("hey"));

// Write a function called identity(input) that takes in an argument called input and returns that input.
function identity(input) {
    return input
}

console.log(identity(45));

//Write a function called getRandomNumber(min, max) that returns a random number between min and max values sent to that function call.
function getRandomNumber(min, max) {
    return (Math.random() * (max - min) + min);
}

console.log(getRandomNumber(7, 12));

// Write a function called first(input) that returns the first character in the provided string.


// Write a function called last(input) that returns the last character of a string

// Write a function called rest(input) that returns everything but the first character of a string.

// Write a function called reverse(input) that takes a string and returns it reversed.

// Write a function called isNumeric(input) that takes an input and returns a boolean if the input is numeric.

// Write a function called count(input) that takes in a string and returns the number of characters.
//
//     Write a function called add(a, b) that returns the sum of a and b
//
// Write a function called subtract(a, b) that return the difference between the two inputs.
//
//     Write multiply(a, b) function that returns the product
//
// Write a divide(numerator, denominator) function that returns a divided by b
//
// Write a remainder(number, divisor) function that returns the remainder left over when dividing number by the divisor
//
// Write the function square(a) that takes in a number and returns the number multiplied by itself.
//
//     Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators
//
// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.

// function truthyOrfalsey (x) {
//     return x ? 1 : 0;
// }
//
// console.log(truthyOrfalsey(23));
//
// function toSeconds (hrs, mins) {
//     return ((hrs * 60) * 60) + (mins * 60);
// }
//
// console.log(toSeconds(1, 60));

