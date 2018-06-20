//Object
//save object (color)
function saveColor() {
    if (typeof (Storage) !== "undefined") {
        var colorIn = document.getElementById('favoriteColor');
        localStorage.setItem("favColor", colorIn.value);
    } else {
        let output = "I am sorry your browser doesn't support local storage.";
        document.getElementById("outputColor").innerHTML = output;
    }
}

//Display object (color)
function showColor() {
    let colorOut = localStorage.getItem("favColor");
    document.getElementById("outputColor").innerHTML = "Favorite Color: " + localStorage.getItem("favColor");
}


//Array
//save array
function saveArray() {
    if (typeof (Storage) !== "undefined") {
        let oneColor = document.getElementById("colorOne").value;
        let twoColor = document.getElementById("colorTwo").value;
        let threeColor = document.getElementById("colorThree").value;
        let fourColor = document.getElementById("colorFour").value;
        let fiveColor = document.getElementById("colorFive").value;
        let colorArray = [oneColor, twoColor, threeColor, fourColor, fiveColor];
        let colorArrayString = JSON.stringify(colorArray);
        localStorage.setItem("colorArray", colorArrayString);
        console.log(colorArrayString);
    } else {
        let output = "I am sorry your browser doesn't support local storage.";
        document.getElementById("arrayOutput").innerHTML = output;
    }
}

//display array
function displayArray() {
    let colors = localStorage.getItem("colorArray");
    console.log(colors);
    let colorsArray = JSON.parse(colors);
    console.log(colorsArray);
    let number = parseFloat(document.getElementById('arrayNum').value);
    let output = colorsArray[number];
    document.getElementById("arrayOutput").innerHTML = output;
}


//Associative Array
//save Associative Array
function saveAssocArray() {
    if (typeof (Storage) !== "undefined") {
        let nameIn = document.getElementById("name").value;
        let foodIn = document.getElementById("food").value;
        let musicIn = document.getElementById("music").value;
        let movieIn = document.getElementById("movie").value;
        let insectIn = document.getElementById("insect").value;
        let array = {
            name: nameIn,
            food: foodIn,
            music: musicIn,
            movie: movieIn,
            insect: insectIn
        };
        console.log(array)
        let assocArrayString = JSON.stringify(array);
        localStorage.setItem("assocArray", assocArrayString);
    } else {
        let output = "I am sorry your browser doesn't support local storage.";
        document.getElementById("assocArrayOutput").innerHTML = output;
    }
}

//display Associative array
function displayAssocArrayValue() {
    let getArray = localStorage.getItem("assocArray");
    console.log(getArray);
    let favoriteArray = JSON.parse(getArray);
    console.log(favoriteArray);
    let nameSaved = favoriteArray.name;
    let foodSaved = favoriteArray.food;
    let musicSaved = favoriteArray.music;
    let movieSaved = favoriteArray.movie;
    let insectSaved = favoriteArray.insect;
    console.log(nameSaved, foodSaved, musicSaved, movieSaved, insectSaved);
    document.getElementById("nameOutput").innerHTML = nameSaved;
    document.getElementById("foodOutput").innerHTML = foodSaved;
    document.getElementById("musicOutput").innerHTML = musicSaved;
    document.getElementById("movieOutput").innerHTML = movieSaved;
    document.getElementById("insectOutput").innerHTML = insectSaved;
}