tasks = ["buy milk", "eat dinner", "nail javascript", "buy fruits", "go shopping mall"]


//declare elements
var todoList = document.getElementById('todo-list');

function strike(e){
  if(e.target.classList.contains('done')){
    e.target.classList.remove('done');
  }else{
    e.target.classList.add('done');
  }
};

function clearContent(){
  input.value = '';
}

function addNewItem(todoContent){
  var item = document.createElement('li');
  item.textContent = todoContent;
  item.addEventListener('click', strike);
  todoList.appendChild(item);
}

//display existing todos
for(var i = 0; i<tasks.length;i++){
  addNewItem(tasks[i]);
}

//function for adding item to list using input
var form = document.getElementsByTagName('form')[0];
//var input = document.getElementById('input');

function addItem(e){
    e.preventDefault();
    addNewItem(input.value);
    clearContent();
}

form.addEventListener('submit', addItem);