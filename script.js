"use strict";
// generate random trip functions
//random element penetrator function
//create some arrays for wach of the trip features

let destinations =["Norway","Miami","Spain","Poland"]
let restaurants = ["Spanish","Norwegian","Italian","Russian"]
let transportation = ["car","truck","jet","boat"]
let entertainment = ["movie","movie theatre","boat tours","hiking"]

function getRandomElementFromArray(array){
return array[Math.floor(Math.random() + array.length)];

}

let randomDestinations = getRandomElementFromArray(destinations);
console.log(randomDestinations);

let randomRestaurants= getRandomElementFromArray(restaurants);
console.log(randomRestaurants);

let randomTransportation = getRandomElementFromArray(transportation);
console.log(randomTransportation);

let randomEntertainment = getRandomElementFromArray(entertainment);
console.log(randomEntertainment);

let trip = [randomDestinations,randomRestaurants,randomTransportation,randomEntertainment]

function displayTrip(arrayOfFeatures) {
let finalTripString ;
for (let i=o;i<arrayOfFeatures.length; i++) {
    finalTripString+= arrayOfFeatures[i] + "\n";
}
alert(finalTripString);
}


function app({

displayTrip(trip);}

let userInput = prompt("Do you like this trip, YES or NO?")

if(userInput==="YES"){
    displayTrip(trip);
} else{


}

}

function reselectTripFeatures(){

     let userChoice = prompt ("Which feature will you change? 1 for destination, 2 for restaurant, 3 for entertainment, 4 for destination.")
switch(userChoice){
    case"1":
    randomDestinations = getRandomElementFromArray(destinations)
    break;

    case"2":
    randomRestaurants = getRandomElementFromArray(restaurants)
    break;

    case"3":
    randomTransportation = getRandomElementFromArray(transportation)
    break;

    case"4":
    randomEntertainment = getRandomElementFromArray(entertainment)
    break;

    default:
        alert("Option selection unavailable please try again.");
        reselectTripFeatures();

}
}
