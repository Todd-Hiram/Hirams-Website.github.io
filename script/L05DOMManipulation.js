function myFunction() {
    var list = document.getElementById("myList");
    list.removeChild(list.childNodes[2]);
}

function myFunction2() {
    var node = document.createElement("LI");
    var textnode = document.createTextNode("And again!");
    node.appendChild(textnode);
    document.getElementById("myList2").appendChild(node);
}

function myFunction3() {
    var newItem = document.createElement("LI");
    var textnode = document.createTextNode("Onions");
    newItem.appendChild(textnode);
    
    var list = document.getElementById("myList3");
    list.insertBefore(newItem, list.childNodes[0])
}