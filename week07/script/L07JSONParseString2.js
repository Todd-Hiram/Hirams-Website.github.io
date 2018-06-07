//Example 1
let person = {
    name: 'Hiram',
    city: 'San Tan Valley',
    state: 'Arizona',
    language: 'JavaScript',
    job: 'Full-time student',
    school: 'BYU-Idaho Online'
};

let output = document.getElementById("example1");

output.innerHTML += JSON.stringify(person) + '<br/>' + "<br/>";

let str = '{"name":"Hiram", "city":"San Tan Valley","state":"Arizona", "language":"JavaScript", "job":"Full-time student", "school": "BYU-Idaho Online"}';

let obj = JSON.parse(str);

for(p in obj) {
	output.innerHTML += obj[p] + '<br/>';
}


//Example 2
let txt = '{"name": "Walter", "email": "hellonutto@gmail.com", "contact": "555-555-5555", "age": "Unknown"}';
let parseText = JSON.parse(txt);

document.getElementById('example2').innerHTML = parseText.email + "<br/>" + "<br/>";

let movies = {
    title: 'Star Wars',
    year: "1977",
    writer:"George Lucas",
    director: "George Lucas"
};

let stringifyText = JSON.stringify(movies);
document.getElementById('example2').innerHTML += stringifyText;