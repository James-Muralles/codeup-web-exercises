(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
// planetsArray = planetsString.split('|')
//     console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    // console.log(planetsString);
   // planetsString = planetsArray.join('<br>')

    planetsArray = planetsString.split('|')
    var list = document.createElement('ul');
    planetsArray.forEach(function (planet) {
        var li = document.createElement('li');
        li.textContent = planet;
        list.appendChild(li);
    });

    console.log(list);

    // console.log("<ul>");
    // planetsArray.forEach(function (planet) {
    //     console.log("<li>" + planet + "</li>");
    // });
    // console.log("</ul>");

    // planetsArray = planetsString.split('|')
    // console.log("<ul>");
    // for(var i = 0; i < planetsArray.length; i++) {
    //     console.log("<li>" + planetsArray[i] + "</li>");
    // }
    // console.log("</ul>");

    // var listLoopString = '<u>'
    //     planetsArray.forEach(function(planet){
    //         listLoopString += '<li>';
    //         listLoopString += planet;
    //         listLoopString += '<li>'
    //     });
    //     listLoopString += '<ul>';
    //     console.log(listLoopString);


})();
