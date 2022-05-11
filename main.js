

let todos = [{
  title: 'Get groceries',
  dueDate: '2021-20-3',
  id: 'id1'
}, {
  title: 'Wash car', 
  dueDate: '2021-04-5',
  id: 'id2'
}, { 
  title: 'Make dinner',
  dueDate: '2023-09-8',
  id: 'id3'
}];


display();

//when button is pressed
function addTodo() {
  //get from the textbox
  const textbox = document.getElementById('input'); 
  const title = textbox.value;

  //get value of date
  const datePicker = document.getElementById('date-input');
  const dueDate = datePicker.value;

  //create an id
  const id = '' + new Date().getTime();

  todos.push({
    title: title,
    dueDate: dueDate,
    id: id
  }); //push into array
  display();
}

function deleteTodo(event) {
  const deleteButton= event.target;
  const idToDelete = deleteButton.id;

  todos = todos.filter( (todo) => {
    if (idToDelete === todo.id) {
      return false;
    } else {
      return true;
    }
  });

  display();
}

//updates page
function display() {
  //reset the list
  document.getElementById('list').innerHTML = '';

  todos.forEach( function (todo) {
    const element = document.createElement('div'); //creates a div
    element.id = 'momeme';
    const todoList = document.getElementById('list'); //for exsiting stuff
    const deleteButton = document.createElement('button');
    //set the div
    element.innerText = todo.title + ' ' + todo.dueDate; //into div
    todoList.appendChild(element);//into div

    deleteButton.innerText = 'Delete';
    deleteButton.onclick = deleteTodo; //dif compared to dom
    deleteButton.id = todo.id //adds the id to the button
    element.appendChild(deleteButton);//ionto div
  });
}





