"use strict"


// 1. prompt user to enter an odd number between 1 - 50
// 2. start a loop that breaks when input is invalid
//
// do{
//     var enteredNumber = Number(prompt("Enter number between 1 - 50"));
//     if(enteredNumber % 2 === 0 || enteredNumber < 1 || enteredNumber > 50){
//         prompt(enteredNumber ("not between 1 and 50"));
//
//     }
//     else if ( enteredNumber % 2 === 0){
//         prompt(enteredNumber ("not odd"));
//     }
//     else if ( isNaN(enteredNumber)){
//         prompt("not a number");
//     }
//     else {
//         alert(enteredNumber ("congrats you picked the right number"));
//         break;
//     }
// }while(true);

do{
    var enterNum = parseFloat(prompt("Please enter an odd number between 1 and 50."));
    if(enterNum % 2 === 0 || enterNum < 1 || enterNum > 50){
        alert("Please enter a valid input.")
    }else if(isNaN(enterNum)) {
        alert("Please enter a valid input.")
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

