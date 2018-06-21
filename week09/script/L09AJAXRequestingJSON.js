/*let myCat = {
    "name": "meowsalot",
    "species": "cat",
    "favFood": "tuna",
}

let myFavColors = ["blue", "green", "purple"];*/

/*Below is the better way to create JSON. We have a single variable that contains all of the data. Objects and arrays nested inside each other.*/

/*let thePets = [
    {
        "name": "meowsalot",
        "species": "cat",
        "favFood": "tuna", 
    }, 
    {
        "name": "Barky",
        "species": "dog",
        "favFood": "carrots", 
    }
]*/

let pageCounter = 1;
let animalContainer = document.getElementById("animalInfo");
let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  let ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
  ourRequest.onload = function() {

      let ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
      
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();
  pageCounter++;
    
    if (pageCounter > 3) {
        
            btn.classList.add("hideMe");
        
          }
    });

function renderHTML(data) {
  let htmlString = "";

  for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
    
    for (ii = 0; ii < data[i].foods.likes.length; ii++) {
        
      if (ii == 0) {
          
        htmlString += data[i].foods.likes[ii];
          
      } else {
          
        htmlString += " and " + data[i].foods.likes[ii];
      }
    }

    htmlString += ' and dislikes ';

    for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
        
      if (ii == 0) {
          
        htmlString += data[i].foods.dislikes[ii];
          
      } else {
          
        htmlString += " and " + data[i].foods.dislikes[ii];
          
      }
    }
      
    htmlString += '.</p>';
  }

  animalContainer.insertAdjacentHTML('beforeend', htmlString);
}

/*resource: https://youtu.be/rJesac0_Ftw*/