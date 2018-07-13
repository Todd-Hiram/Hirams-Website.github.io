function usingNew() {
    'use strict';
	let politics = new Object();
	politics.canidate1 = "Romney";
	politics.canidate2 = "Trump";
	politics.side1 = "good";
    politics.side2 = "bad";

	document.getElementById("Cand1").innerHTML =
	politics.canidate1 + " vs. " + politics.canidate2 + " is a battle between " + politics.side1 + " & " + politics.side2 + "!";
}

function addingNew() {
    let caring = {
        cars1: "BMW",
        cars2: "Dodge",
        cars3: "Toyota",
        cars4: "Ford"
    };

    caring.nationality = "Japanese";
    document.getElementById("add").innerHTML =
    caring.cars3 + " is " + caring.nationality + ", and is one of the best running cars in the industry.";
}

function testMethod() {
	let message = "this is much more expressive!!!";
	let x = message.toUpperCase();
	document.getElementById("methodTest").innerHTML = x;
}