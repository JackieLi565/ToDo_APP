

const todos = [{
  title: 'Get groceries',
  dueDate: '2021-20-3'
}, {
  title: 'Wash car', 
  dueDate: '2021-04-5'
}, { 
  title: 'Make dinner',
  dueDate: '2023-09-8'
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

  todos.push({
    title: title,
    dueDate: dueDate
  }); //push into array
  display();
}

//updates page
function display() {
  //reset the list
  document.getElementById('list').innerHTML = '';

  todos.forEach( (todo) => {
    const element = document.createElement('div');
    const todoList = document.getElementById('list');
    //set the div
    element.innerText = todo.title + ' ' + todo.dueDate;
    todoList.appendChild(element);
  });
}





