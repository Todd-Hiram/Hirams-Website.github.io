/*let myObj = new Object(),
    str = "myString",
    rand = Math.random(),
    obj = new Object();

myObj.type              = "Dot syntax";
myObj["date created"]   = "String with space";
myObj[str]              = "String value";
myObj[rand]             = "Random Number";
myObj[obj]              = "Object";
myObj[""]               = "Even an empty string";

console.log(myObj);

let myHonda = {
    'use strict';
  color: "red",
  wheels: 4,
  engine: {
    cylinders: 4,
    size: 2.2
  }
};
//different ways to access all properties
document.getElementById("test").innerHTML = Object.keys (myObj);
document.getElementById("test1").innerHTML = Object.getOwnPropertyNames(myHonda);
//access property
document.getElementById("test2").innerHTML = myHonda.engine.cylinders;


//methods

let person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
        return this.firstName + " " + this.lastName;
}}
document.getElementById("test3").innerHTML = person.fullName();*/

function usingNew() {
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