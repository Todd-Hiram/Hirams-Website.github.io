//This function shrinks the location map with a click of a button
function openClose() {
    'use strict';
  let content = document.getElementById("content");
  let button = document.getElementById("show-map");

  button.onclick = function() {
    if (content.className == "open") {
      //shrink the box
      content.className = "";
      button.innerHTML = "Show Map";
    } else {
      //expand the box
      content.className = "open";
      button.innerHTML = "Show Map";
    }
  };
}

window.onload = function() {
  openClose();
};


//This is AJAX requesting a JSON file
let xmlhttp = new XMLHttpRequest();
let url = "CaliforniaCities.txt";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
    let out = "";
    let i;
    for(i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].url + '">' + 
        arr[i].display + '</a><br>';
    }
    document.getElementById("caliCity").innerHTML = out;
}


//This creates listeners
function startup() {
    let dropdown = document.getElementsByClassName('dropdown');

    for(let element of dropdown) {
        element.addEventListener('mouseover',function() {
            this.classList.add('active');
            let panel = this.nextElementSibling;
            panel.style.maxHeight = panel.scrollHeight + "px";
        });
        
        element.addEventListener('mouseout',function() {
            this.classList.remove('active');
            let panel = this.nextElementSibling;
            panel.style.maxHeight = null;
        });
    }
}

//event listener to fire the startup() funciton on load
window.addEventListener('DOMContentLoaded', startup, false);

//find the elements of the accordian and toggle css class on mouseover