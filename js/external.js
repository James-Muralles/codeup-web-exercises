"use strict";
console.log("Hello from external javascript");
alert("Welcome to my Website!");

var promptColor = prompt("What is your favorite color?");
alert("Great, " + promptColor + " is my favorite color too!");

//MOVIE COST
var promptBrobear = prompt("How many days did you rent Brother Bear for?");
alert("You rented it for " + promptBrobear + " days, thats $" +  3 * Number(promptBrobear));

var promptMermaid = prompt("How many days did you rent The Little Mermaid for?");
alert("You rented it for " + promptMermaid + " days, thats $" +  3 * Number(promptMermaid));

var promptHerc = prompt("How many days did you rent Hercules for?");
alert("You rented it for " + promptHerc + " days, thats $" +  3 * Number(promptHerc));

var totalcost = (Number(promptHerc) + Number(promptBrobear) + Number(promptMermaid))*3;
alert("Your total is $" + totalcost);

//CONTRACTOR COMPANIES WORK
var promptgoogle = prompt("How much did you make at google per hour?");
var promptgooglehours = prompt("How many days did you work?");

var promptamzaon = prompt("How much did you make at amazon per hour?");
var promptamazonhours = prompt("How many days did you work?");

var promptfb = prompt("How much did you make at facebook per hour?");
var promptfbhours = prompt("How many days did you work?");

var totalcost2 = (Number(promptgoogle*promptgooglehours) + Number(promptamzaon*promptamazonhours) + Number(promptfb*promptfbhours));
alert("Your total pay for the week is $" + totalcost2);

//CLASS SCHEDULE
var enrollyes = prompt("Is the class full? yes/no");
var scheduleyes = prompt("Do you have that time slot open? yes/no");
if (enrollyes === "no" && scheduleyes=== "yes") {
    alert("Great you can enroll!");
}
else {
    alert("you cannot enroll")
}

//PRODUCT OFFER
var howmany = prompt('How many items are you buying?');
var offer = prompt('Has the offer expired? yes/no');
var premium = prompt("Are you a premium member? yes/no");
 if (howmany > 2 && offer === "no" || premium === 'yes'){
     alert('You get the product offer!')
 }
 else{
     alert('Sorry')
 }




