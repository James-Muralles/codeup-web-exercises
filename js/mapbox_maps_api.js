"use strict";
mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-guidance-night-v4',
    zoom: 15,
    center: [-98.4916, 29.4252],

});

var markerOptions = {
    color: 'red',
    draggable: true,
};
var pizzaMarkeroptions = {
    color: 'blue',

};

var pizzaMarker = new mapboxgl.Marker(pizzaMarkeroptions)
    .setLngLat([-98.45891, 29.489714])
    .addTo(map)
    .setPopup(pizzaPopup);

var marker = new mapboxgl.Marker(markerOptions)
    .setLngLat([-98.4861, 29.4260])
    .addTo(map);

var el = document.createElement('div');
el.id = 'marker';


var pizzaPopup = new mapboxgl.Popup()
    .setHTML("<h1> Julian's Italian Pizzeria</h1>");


pizzaMarker.setPopup(pizzaPopup);

var arrPlaces = [
    {
        address: "Taco Bell, 615 San Pedro Ave, San Antonio, TX 78212",
        popupHTML: "<p>Best Mexican food in Texas. </p>"

    },
    {
        address: "406 Navarro St, San Antonio, TX 78205",
        popupHTML: "<p>I just felt like shrimping...</p>"

    },
    {
        address: "McDonald's, 721 San Pedro Ave, San Antonio, TX 78212",
        popupHTML: "<p>Put a smile on!</p>"

    }
];


arrPlaces.forEach(function (place) {
    geocode(place.address, mapboxToken).then(function (result) {
        var popup = new mapboxgl.Popup()
            .setHTML(place.popupHTML);
        var markerr = new mapboxgl.Marker(markerOptions)
            .setLngLat(result)
            .setPopup(popup)
            .addTo(map)
    });


});





// geocode("6462 N New Braunfels Ave, San Antonio, TX 78209", mapboxToken).then(function(result){
//     console.log(result);
//     map.flyTo({center: result, zoom: 15});
//
//
// });