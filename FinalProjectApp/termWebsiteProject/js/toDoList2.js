var input = document.getElementById("input");
var button = document.getElementById("button");
var list = document.getElementById("list");
var clearButton = document.getElementById("clear");
var remove = document.getElementById("remove");

function resetInput() {
  input.value = "";
}

function createElement (element, text, className){
  var element = document.createElement(element);
    element.classList.add(className);
    element.appendChild(document.createTextNode(text)); 
  return element;
}

function createListElement() {
  var text = createElement("span", input.value, "todo-list-text")
  text.addEventListener("click", function() {
    this.classList.toggle("done");
  });
  
  var removeItem = createElement("button", "remove", "btn--remove");
  removeItem.addEventListener("click", function(){
    this.parentNode.remove();
  })
 
  var li = createElement("li", "", "todo-list-item" );
  
  li.appendChild(text);
  li.appendChild(removeItem);
  
  list.appendChild(li);
  resetInput();
}

function handleEnter(e) {
  e.key === "Enter" && createListElement();
};

function removeLastItem() {
  var items = document.getElementsByClassName("todo-list-item");
  var length = items.length;
  items.length && list.removeChild(items[length - 1]);
}

clearButton.addEventListener("click", resetInput);
button.addEventListener("click", createListElement);
input.addEventListener("keypress", handleEnter);
remove.addEventListener("click", removeLastItem);
