let httpRequest;

function fetchWeatherData() {
    'use strict';
    let zipCode = document.querySelector("input[name='zipCode']").value;
    if (zipCode) {
        console.log("zipCode:", zipCode);
        httpRequest = new XMLHttpRequest();

        if (!httpRequest) {
            return;
        }
        httpRequest.onreadystatechange = parseWeatherData;
        httpRequest.open('GET', 'https://api.wunderground.com/api/3b345a3fea42ac03/conditions/q/' + zipCode + '.json');
        httpRequest.send();
    }
}

function parseWeatherData() {
    console.log("parsing");
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            try {
                let data = JSON.parse(httpRequest.responseText);
                console.log(data);
                document.querySelector("#city-label").innerText            = data["current_observation"]["display_location"]["full"];
                document.querySelector("#current-weather-label").innerText = data["current_observation"]["weather"];
            }
            catch (e) {
                console.log(e);
                console.log(httpRequest.responseText);
                alert("The response was not valid JSON.");
            }
        } else {
            alert('There was a problem with the request.');
        }
    }
}

//3b345a3fea42ac03