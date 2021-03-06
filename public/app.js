var init = function () {
  var button = document.querySelector('button');
  button.addEventListener('click', handleButtonClick);

  var todosArray = JSON.parse(localStorage.getItem('todoList')) || [];
  populate(todosArray);
}

var populate = function (todos) {
  // this function needs to:
  var todosArray = JSON.parse(localStorage.getItem('todoList')) || [];
  for(item of todosArray) {
    addItem(item);
  }
  // - loop through the array of todos, invoking addItem() for each todo item
}

var addItem = function (item) {
  var ul = document.querySelector('#todo-list');
  // this function needs to:
  var listItem = document.createElement('li');
  listItem.innerText = item;
  ul.appendChild(listItem);
  // - create an li element containing the string 'item'
  // - append the li to the "todo-list" ul
}

var handleButtonClick = function () {
  // this function needs to:
    var newItem = document.getElementById("new-item").value;
    addItem(newItem);
    save(newItem);

  // - get hold of the input box's value
  // - append it to the "todo-list" ul by invoking addItem()
  // - add it to local storage by invoking save()
}

var save = function (newItem) {
  // this function needs to:

  var  jsonString = localStorage.getItem('todoList');
  var savedList = JSON.parse(jsonString) || [];


  savedList.unshift(newItem);
  var jsonArrayString = JSON.stringify(savedList);
  localStorage.setItem('todoList', jsonArrayString);




  // - get the data back from local storage and parse to an array
  // - add the newItem to the array
  // - stringify the updated array
  // - save it back to localstoage
}

window.addEventListener('load', init);
