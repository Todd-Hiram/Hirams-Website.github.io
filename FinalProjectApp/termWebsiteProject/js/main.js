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

/*---------------------------------------------------------*/
//this animates the beating hearts on California Cycling page
var heart = document.getElementsByClassName('heart')[1],
    pfx = ["webkit", "moz", "MS", "o", ""],
    hovered = false;

function AnimationListener() {
    if(hovered)
    { 
      heart.classList.remove('animated'); 
      heart.style.webkitTransform = 'scale(2)';
      heart.style.MozTransform = 'scale(2)';
      heart.style.msTransform = 'scale(2)';
      heart.style.OTransform = 'scale(2)';
      heart.style.transform = 'scale(2)';
    }
}

function TransitionListener() {
  if(!hovered)
  {
    heart.classList.add('animated');
  }
}

function PrefixedEvent(element, type, callback) {
    for (var p = 0; p < pfx.length; p++) {
        if (!pfx[p]) type = type.toLowerCase();
        element.addEventListener(pfx[p]+type, callback, false);
    }
}

PrefixedEvent(heart, "AnimationIteration", AnimationListener);

heart.onmouseover = function() {
  hovered = true;
}
heart.onmouseout = function() {
  setTimeout(function() { hovered = false; }, 500);
  PrefixedEvent(heart, "TransitionEnd", TransitionListener);
  heart.style.webkitTransform = 'scale(1)';
  heart.style.MozTransform = 'scale(1)';
  heart.style.msTransform = 'scale(1)';
  heart.style.OTransform = 'scale(1)';
  heart.style.transform = 'scale(1)';  
}

/*------------ Drag Mouse for Coordinates ------------*/
function mouseMove(mouse) {
    let x = mouse.clientX;
    let y = mouse.clientY;
    let coordinates = "Coordinate are: (" + x + ", " + y + ")";
    document.getElementById("demo2").innerHTML = coordinates;
}

function clearCoord() {
    document.getElementById("demo2").innerHTML = "";
}

/*------------ Drag Finger for Coordinates ------------*/
function myFunction(event) {
  let x = event.touches[0].clientX;
  let y = event.touches[0].clientY;
  document.getElementById("demo1").innerHTML = "Coordinate are: (" + x + ", " + y + ")";
}

/*-------------- California Weather Rating -------------*/
function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}