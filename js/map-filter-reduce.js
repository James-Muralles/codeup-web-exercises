"use strict"

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

function createList(arr) {
    var html = '';
    arr.forEach(function (item) {
        html += '<li>' + item + '</li>';
    });
    return html;
}
//1
let threeLangs = users.filter(user => (user.languages.length <= 3));
console.log(threeLangs);
$('#body').append(createList(threeLangs.map(user => user.languages)));

//2
let emails = users.map(user => user.email);
$('#body').append(createList(emails));

//3
let totalYears = users.reduce((total, user) => total + user.yearsOfExperience,0);
let average = totalYears/users.length;
$('#body').append(`total: ${totalYears} average: ${average}`);

//4
// let longest = users.sort((a, b) => (b.email.length - a.email.length) );
// console.log(longest[0].email);

let longOne = users.reduce((current, user) => user.email.length > current.length ? user.email: current,"@" );

console.log(longOne);

//5
// let strName = users.reduce((total, user, idx) =>  idx === 0  ? total.name + '.' : user.name + ', ' + total,"")

let strName = users.reduce((sentence, user) => sentence === 'your instructors are:' ? sentence +  user.name  : sentence  + ", " + user.name, "Your instructors are: ");

console.log( strName + '.');



