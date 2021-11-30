import {TodoPage} from './todoPage.js';
import {Todo} from './todo.js';
import './style.css';

const container = document.querySelector('#container');

const todoPage = new TodoPage();
const fakeTodo = new Todo("try to do")
fakeTodo.text = "somthing here";
todoPage.add(fakeTodo);

function doTopStrip() {
  
  const topStrip = document.createElement("div");

  const label = document.createElement("label");
  label.innerText = "new Todo";

  const inputTitle = document.createElement("input");
  inputTitle.setAttribute("type", "text");

  const btnNewTodo = document.createElement("button");
  btnNewTodo.innerText = "create";
  btnNewTodo.addEventListener("click", addBoxTodo);

  function addBoxTodo(event) {
    const newTodo = new Todo(inputTitle.text);
    newTodo.text = "working in progress ...";
    const box = todoBox(newTodo);
    container.appendChild(box);
  }

  topStrip.appendChild(label);
  topStrip.appendChild(inputTitle);
  topStrip.appendChild(btnNewTodo);

  return topStrip;  
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

  container.appendChild(doTopStrip());
  container.appendChild(todoBox(fakeTodo));
  document.body.appendChild(container);