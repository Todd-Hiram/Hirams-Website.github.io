//Here is a list of names in an array
var myKids = ['Brayden', 'Kael', 'Oliver', 'Navy', 'cherry', 'knuckleheads'];

//This for loop displays only 3 names
for (var i = 0; i < 4; i++) {
	console.log(myKids[i]);
}

//This for loop is only limited to display 4 names
for (var i = 0; i <= 4; i++) {
	console.log(myKids[i]);
}

//This for loop displays only 4 names
for (var i = 0; i < 5; i++) {
	console.log(myKids[i]);
}

//This for loop displays the full length of the array
for (var i = 0; i < myKids.length; i++) {
	console.log(myKids[i]);
}

//This for loop displays the full length of the array
for (var i = 0; i < myKids.length; i++) {
	console.log(myKids[i]);
}

//Here is a list of names in an array
var myArray = new Array(4);

myArray[0] = 'Brayden';
myArray[1] = 'Kael';
myArray[2] = 'Oiver';
myArray[3] = 'Navy';

console.log(myArray);

//Here is an array that counts numbers by fives with a length of 10
var countByFiveArray = [];

  for (var i =0; i <= 10; i++) {
    
    countByFiveArray[i] = i * 5;
    
  }
  
  for (var i = 0; i < countByFiveArray.length; i++) {
    
    console.log(countByFiveArray[i]);
    
  }

//loop through an object.
var data = {
    name: 'Hiram',
    age: 45,
    maritalStatus: true
  }
  
  console.log(data["age"])
  
  for (var elem in data) {
    console.log(elem, data[elem]);
  }

//switch statement
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
  }
  console.log(day)

//While loop that counts up from 0 to 10, adds each number to ten. Final result is 55.
let num = 0;

    while (num <= 10) {
    console.log(num);
    num++;
    }

//Do-While loop that counts down to 10
let counter = 1;

    do {
    console.log("Count down to " + counter);
    counter++;
    } while(counter <= 10);