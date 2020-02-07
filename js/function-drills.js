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

console.log(identity());

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

// function
// Make a function named isMultipleOfThree(input)
// function
// Make a function named isMultipleOfThreeAndFive(input)
// function
// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
// function
// Make a function named isTrue(boolean)
// function
// Make a function named isFalse(boolean)
// function
// Make a function named isTruthy(input), remember that values other than true will behave like true
function isTruthy (input) {
    return !!input === true;
}
console.log(isTruthy(0));

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
// function
// Make a function named hasLowerCase(string) that returns if a string has any lower cased letter
// function
// Make a function named isSpace(letter) that returns if a character is a space character
// function
// Make a function named isZero(number)
// function
// Make a function named notZero(input) that returns true if the input is not zero
// function
// Write a function named lowerCase(string)
// function
// Write a function named double(n) that returns a number times two
// function
// Write a function named triple(n) that returns a number times 3
function triple (n){
    n = n.toString();
    return n + n + n ;
}
console.log(triple(5));
// Write a function named quadruple(n) that returns a number times 4
// function
// Write a function named half(n) that returns 1/2 of the provided input
// function
// Write a function named subtract(a, b) that returns a minus b
// function
// Write a function named multiply(a, b) that returns the product of a times b
// function
// Write a function named divide(a, b) that returns a divided by b
// function
// Write a function named remainder(a, b) that returns the remainder after dividing a by b
