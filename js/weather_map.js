"use strict";
mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-guidance-night-v4',
    zoom: 15,
    center: [-98.4916, 29.4252],

});

$(document).ready(function () {
//  array containing clear-day, clear-night, rain, snow, sleet, wind, fog, cloudy, partly-cloudy-day, partly-cloudy-night.

    function capitalizeName(str) {
        var arr = str.split(' ');
        var capitalNames = [];
        for(var i = 0; i < arr.length; i++){
            capitalNames.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
        }
        return capitalNames.join(' ');
    }

        var icons = [

        {
            conditions: 'clear-day',
            image: '<img src="img/weather-icons/ghost.png" alt="">'
        },
        {
            conditions: 'clear-night',
            image: '<img src="img/weather-icons/031-night.png" alt="">'
        },
        {
            conditions: 'rain',
            image: '<img src="img/weather-icons/001-rain.png" alt="">'
        },
        {
            conditions: 'snow',
            image: '<img src="img/weather-icons/033-snow.png" alt="">'
        },
        {
            conditions: 'sleet',
            image: '<img src="img/weather-icons/033-snow.png" alt="">'
        },
        {
            conditions: 'wind',
            image: '<img src="img/weather-icons/016-wind.png" alt="">'
        },
        {
            conditions: 'fog',
            image: '<img src="img/weather-icons/001-rain.png" alt="">'
        },
        {
            conditions: 'cloudy',
            image: '<img src="img/weather-icons/011-cloud.png" alt="">'
        },
        {
            conditions: 'partly-cloudy-day',
            image: '<img src="img/weather-icons/001-rain.png" alt="">'
        },
        {
            conditions: 'partly-cloudy-night',
            image: '<img src="img/weather-icons/001-rain.png" alt="">'
        },

    ];

    //function to add icon



//gets data and appends it
    $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/29.4252,-98.4916").done(function (data) {
        // console.log(data);
        // console.log(new Date(data.currently.time * 1000));
        // console.log(data.daily.data[0].apparentTemperatureHigh);
                console.log(data.currently.icon);
    function addIcon(){
        var add = [];
        icons.forEach(function(icon){
            if (data.currently.icon === icon.conditions){
                add.push(icon.image);
                console.log(icon.conditions);
                console.log(add);
            }
        });
                return add[0].toString();
    };
        console.log(addIcon());

        function addIcon2(){
            var add = [];
            icons.forEach(function(icon){
                if (data.daily.data[1].icon === icon.conditions){
                    add.push(icon.image);
                    console.log(icon.conditions);
                    console.log(add);
                }
            });
            return add.toString();
        };
        console.log(addIcon2());

        function addIcon3(){
            var add = [];
            icons.forEach(function(icon){
                if (data.daily.data[2].icon === icon.conditions){
                    add.push(icon.image);
                    console.log(icon.conditions);
                    console.log(add);
                }
            });
            return add.toString();
        };
        console.log(addIcon3());

        var currentTemp = $('#day-1').html(data.currently.apparentTemperature +   '°/' + data.currently.TemperatureMin + '°' + '<br>' + addIcon()   + '<br>' + capitalizeName(data.currently.icon) +':' + data.currently.summary + '<br>' + 'Humidity: ' + data.currently.humidity + '<br>' + 'Wind: ' + data.currently.windSpeed + '<br>' + 'Pressure: ' + data.currently.pressure);

        var dayTwoTemp = $('#day-2').html(data.daily.data[1].apparentTemperatureMax + '°/' + data.daily.data[1].apparentTemperatureMin + '°' + '<br>' + addIcon2() + '<br>' + capitalizeName(data.daily.data[1].icon) + ': ' + data.daily.data[1].summary + '<br>' + 'Humidity: ' + data.daily.data[1].humidity + '<br>' + 'Wind: ' + data.daily.data[1].windSpeed + '<br>' + 'Pressure: ' + data.daily.data[1].pressure);

        var dayThreeTemp = $('#day-3').html(data.daily.data[2].apparentTemperatureMax + '°/' + data.daily.data[2].apparentTemperatureMin + '°' + '<br>' + addIcon3() + '<br>' + capitalizeName(data.daily.data[2].icon) + ': ' + data.daily.data[2].summary + '<br>' + 'Humidity: ' + data.daily.data[2].humidity + '<br>' + 'Wind: ' + data.daily.data[2].windSpeed + '<br>' + 'Pressure: ' + data.daily.data[2].pressure);


    });



});


