"use strict"
// var i = 1
//     do {
//         var numPrompt = prompt("Enter odd number here between 1 and 50");
// if (numPrompt % 2 === 0) {
//     break;
//         }
// else if (numPrompt % 2) {
//
//         console.log(i++)
// }
//
//     }while (i < 50);





//     console.log("Here is an odd number: " + i);
//
//     if (i === numPrompt) {
//
//         console.log("Yikes! Skips this number: " + i)
//     }
// }

// 1. prompt user to enter an odd number between 1 - 50
// 2. start a loop that breaks when input is invalid

// do{
//     var enteredNumber = Number(prompt("Enter number between 1 - 50"));
//     if (enteredNumber < 1 || enteredNumber > 50){
//         alert(enteredNumber ("not between 1 and 50"));
//
//     }
//     else if ( enteredNumber % 2 === 0){
//         alert(enteredNumber ("not odd"));
//     }
//     else if ( isNaN(enteredNumber)){
//         alert ("not a number");
//     }
//     else {
//         alert(enteredNumber ("congrats you picked the right number"));
//         break;
//     }
// }while(true);

do{
    var enterNum = parseFloat(prompt("Please enter an odd number between 1 and 50."));
    if(enterNum % 2 === 0 || enterNum < 1 || enterNum > 50){
        prompt("Please enter a valid input.")
    }else if(isNaN(enterNum)) {
        prompt("Please enter a valid input.")
    }else {
        break
    }
}while (true);

for (var i = 1; i <= 50; i++){
    if (i % 2 === 0){
        continue;
    }
    else if (i === enterNum){
        console.log("Yikes! Skipping number: " + enterNum)

    }
    else{
        console.log("Here is an odd number: "  +i)
    }
}

