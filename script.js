tasks = ["buy milk", "eat dinner", "nail javascript"]

//declare elements
var todoList = document.getElementById('todo-list');
var addButton = document.getElementById('addBtn');


function strike(e){
  if(e.target.classList.contains('done')){
    e.target.classList.remove('done');
  }else{
    e.target.classList.add('done');
  }
};

function addNewItem(todoContent){
  var item = document.createElement('li');
  item.textContent = todoContent;
  item.addEventListener('click', strike);
  todoList.appendChild(item);
}

function clearContent(){
  input.value = '';
}


for(var i = 0; i<tasks.length;i++){
  addNewItem(tasks[i]);
}

//function for adding item to list

var form = document.getElementsByTagName('form')[0];
var input = document.getElementById('input');
function addItem(e){
  if(e.charCode === 13){
    e.preventDefault();
    addNewItem(input.value);
    clearContent();
  }else{
    console.log('Other keys pressed');
  }
}

//function for adding item to list using enter key
// function addItemUsingEnter(e){
//   if(e.charCode === 13) {
//     e.preventDefault();
//     var inputValue = form.elements['input'].value;
//     var item = document.createElement('li');
//     item.textContent = inputValue;
//     todoList.appendChild(item);
//     item.addEventListener('click', strike);
//     clearContent();
//   }else{
//     console.log('Press enter to submit!!!');
//   }
// }

//form.addEventListener('submit', addItem);
form.addEventListener('keypress', addItem);