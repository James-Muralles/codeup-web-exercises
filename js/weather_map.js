"use strict";

$(document).ready(function () {

    mapboxgl.accessToken = mapboxToken;
    var coordinates = document.getElementById('coordinates');
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 15,
        center: [-98.4916, 29.4252]

    });

    var geocoder = new MapboxGeocoder({
        accessToken: mapboxToken,
        mapboxgl: mapboxgl,
    });

    map.addControl(geocoder);

    geocoder.on('result', function(e) {
        console.log(e);
        var latLng = {};
        latLng.lng = e.result.geometry.coordinates[0];
        latLng.lat = e.result.geometry.coordinates[1];
        //explore "e" to find the coordinates
        marker.setLngLat(latLng);
        getWeather()
    });




    var nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-left');



    var markerOptions = {
        color: 'red',
        draggable: true,
    };

    var marker = new mapboxgl.Marker(markerOptions)
        .setLngLat([-98.4861, 29.4260])
        .addTo(map);

    // var layerList = document.getElementById('menu');
    // var inputs = layerList.getElementsByTagName('input');
    //
    // function switchLayer(layer) {
    //     var layerId = layer.target.id;
    //     map.setStyle('mapbox://styles/mapbox/' + layerId);
    // }
    //
    // for (var i = 0; i < inputs.length; i++) {
    //     inputs[i].onclick = switchLayer;
    // }

// var el = document.createElement('div');
// el.id = 'marker';
    function onDragEnd(lat, lng) {
        var lngLat = marker.getLngLat();
        coordinates.style.display = 'block';
        coordinates.innerHTML =
            'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
        // var coords = (lngLat.lat +"," + "" + ""  + lngLat.lng);
        // return coords
    }
    marker.on('dragend', getWeather);


    function onDragEndAgain(lat, lng) {
        var lngLat2 = marker.getLngLat();
        coordinates.style.display = 'block';
        coordinates.innerHTML =
            'Longitude: ' + lngLat2.lng + '<br />Latitude: ' + lngLat2.lat;
        // return coords

    }

    marker.on('dragend', onDragEndAgain);




    function capitalizeName(str) {
        var arr = str.split(' ');
        var capitalNames = [];
        for (var i = 0; i < arr.length; i++) {
            capitalNames.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
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


//gets data and appends it
    function getWeather() {
        $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + marker.getLngLat().lat + "," + marker.getLngLat().lng).done(function (data) {
            console.log(data);
            console.log(new Date(data.currently.time * 1000));
            console.log(data.daily.data[0].apparentTemperatureHigh);
            console.log(data.currently.icon);

            reverseGeocode({
                    lat: marker.getLngLat().lat,
                    lng: marker.getLngLat().lng
                },
                mapboxgl.accessToken).then(function(results){
                console.log(results);
                $('h1').html(results )
            });





            //adds correct icon image to bucket based on the correct conditions
            function addIcon() {
                var add = [];
                icons.forEach(function (icon) {
                    if (data.currently.icon === icon.conditions) {
                        add.push(icon.image);
                    }
                });
                return add[0].toString();
            };

            function addIcon2() {
                var add = [];
                icons.forEach(function (icon) {
                    if (data.daily.data[1].icon === icon.conditions) {
                        add.push(icon.image);
                    }
                });
                return add.toString();

            };

            function addIcon3() {
                var add = [];
                icons.forEach(function (icon) {
                    if (data.daily.data[2].icon === icon.conditions) {
                        add.push(icon.image);
                    }
                });
                return add.toString();
            };


            //appends data to the cards
            var currentTemp = $('#day-1').html(data.currently.apparentTemperature + '°/' + data.daily.data[0].temperatureLow + '°' + '<br>' + addIcon() + '<br>' + capitalizeName(data.currently.icon) + ':' + data.currently.summary + '<br>' + 'Humidity: ' + data.currently.humidity + '<br>' + 'Wind: ' + data.currently.windSpeed + '<br>' + 'Pressure: ' + data.currently.pressure);

            var dayTwoTemp = $('#day-2').html(data.daily.data[1].apparentTemperatureMax + '°/' + data.daily.data[1].apparentTemperatureMin + '°' + '<br>' + addIcon2() + '<br>' + capitalizeName(data.daily.data[1].icon) + ': ' + data.daily.data[1].summary + '<br>' + 'Humidity: ' + data.daily.data[1].humidity + '<br>' + 'Wind: ' + data.daily.data[1].windSpeed + '<br>' + 'Pressure: ' + data.daily.data[1].pressure);

            var dayThreeTemp = $('#day-3').html(data.daily.data[2].apparentTemperatureMax + '°/' + data.daily.data[2].apparentTemperatureMin + '°' + '<br>' + addIcon3() + '<br>' + capitalizeName(data.daily.data[2].icon) + ': ' + data.daily.data[2].summary + '<br>' + 'Humidity: ' + data.daily.data[2].humidity + '<br>' + 'Wind: ' + data.daily.data[2].windSpeed + '<br>' + 'Pressure: ' + data.daily.data[2].pressure);


        });

        // function getWeather() {
        //     for (var i = 0; i <= 2; i++) {
        //         // var cardClass = ".info-" + i;
        //         $('#forecast-cards').html(
        //             add[i].highTemp + "/" + bucket[i].lowTemp +
        //             "<br>" +
        //             bucket[i].icon +
        //             "<br>" +
        //             addImage() +
        //             '<br>' +
        //             'Precipitation ' + bucket[i].precip +
        //             '<br>' +
        //             'Humidity ' + bucket[i].humidity +
        //             '<br>' +
        //             'Wind Speed ' + bucket[i].windSpeed +
        //             '<br>' +
        //             'UV Index ' + bucket[i].uv
        //         );
        //     }
        // }


    }
    getWeather();
});

