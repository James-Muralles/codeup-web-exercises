"use strict";

const wait = num => {
    return new Promise((resolve) => {
        if (typeof num === 'number') {
            setTimeout(resolve, num);
        } else {
            reject()
        }
    });
};


// wait('d').then(() => console.log('You\'ll see this after 1 second')).catch(() => console.log('no number'));

let getDate = userName => {
    fetch(`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': gitHubKey}})
        .then(response => response.json())
        // .then(response => $('h1').html(new Date(response[2].created_at)))
        .then(response => response.filter(item => item.type === "PushEvent"))
        .then(item => item[0].payload.commits)
        .then(item => (item[item.length - 1].url))
        .then(item => fetch(item, {'Authorization': gitHubKey}))
        .then(item => item.json())
        // .then(item => console.log(item))
        .then(item => (item.commit.author.date))
        .then(item => $('h1').html(new Date(item)));
};

getDate('james-muralles');










