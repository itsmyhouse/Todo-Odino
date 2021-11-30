function Todo (title) {
  this.title = title;
  this.text = '';
}

function MyTodo() {
  this.todos = [];
}

MyTodo.prototype.add = function(todo) {
  this.todos.push(todo);
}

MyTodo.prototype.remove = function(index) {
  this.todos.splice(index, 1);
}

MyTodo.prototype.indexOf = function(todo) {
  return this.todos.indexOf(todo);
}

function todoBox(todo) {

  const todoBox = document.createElement("div");
  todoBox.classList.add("box");
  
  const title = document.createElement("h2");
  title.innerText = todo.title;
  
  const para = document.createElement("p");
  para.innerText = todo.text;

  todoBox.appendChild(title);
  todoBox.appendChild(para);

  return todoBox;
}


export { Todo, MyTodo,  todoBox };