//This is AJAX requesting a JSON file
/* global Promise: true */
var xmlhttp = new XMLHttpRequest();
var url = "/CaliforniaCities.txt";

xmlhttp.onreadystatechange = function () {
    'use strict';
    if (this.readyState === 4 && this.status === 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
    var out = "",
        i;
    for (i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].url + '">' + arr[i].display + '</a><br>';
    }

    document.getElementById("cityEvents").innerHTML = out;
}
