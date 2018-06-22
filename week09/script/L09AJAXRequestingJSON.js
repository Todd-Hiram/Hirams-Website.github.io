let pageCounter = 1;
let animalContainer = document.getElementById("animalInfo");
let btn = document.getElementById("btn");

/*Now web browsers have a built-in tool
named XML HTTP request and this tool
does the heavy lifting. This tool establishes a connection with a
URL that we specify and then it lets us
send or receive data.*/
btn.addEventListener("click", function() {
  let ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
  ourRequest.onload = function() {

      let ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
      
  };

//Here we display a error message if there is no connection
  ourRequest.onerror = function() {
    console.log("Connection error");
  };

//This part of the function hides the button after 3 clicks.
  ourRequest.send();
  pageCounter++;
    
    if (pageCounter > 3) {
        
            btn.classList.add("hideMe");
        
          }
    });

//This function adds HTML to the empty DIV element.
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