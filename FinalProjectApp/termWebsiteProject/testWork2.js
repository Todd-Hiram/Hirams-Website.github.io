let request = new XMLHttpRequest();
let url = "CaliforniaCities.txt";

request.onreadystatechange = function () {
    'use strict';
    if (this.readyState == 4 && this.status == 200) {
        let myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
};
request.open("GET", url, true);
request.send();

function myFunction(arr) {
    let out = "";
    let i;
    for (i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].url + '">' + arr[i].display + '</a><br>';
    }
    
    document.getElementById("cityEvents").innerHTML = out;
}