let text = '{ "name":"Walt", "birth":"1986-12-12", "city":"New York"}';
let myJSON = JSON.stringify(text);
let obj = JSON.parse(text, function (key, value) {
    if (key == "birth") {
        return new Date(value);
    } else {
        return value;
    }
});
document.getElementById("parse").innerHTML = obj.name + ", " + obj.birth;
document.getElementById("stringify").innerHTML = myJSON;