import {TodoPage} from './todoPage.js';
import {Todo} from './todo.js';
import './style.css';

const container = document.querySelector('#container');

function doTopStrip() {
  
  const topStrip = document.createElement("div");

  const label = document.createElement("label");
  label.innerText = "new Todo";

  const inputTitle = document.createElement("input");
  inputTitle.setAttribute("type", "text");

  const btnNewTodo = document.createElement("button");
  btnNewTodo.innerText = "create";

  topStrip.appendChild(label);
  topStrip.appendChild(inputTitle);
  topStrip.appendChild(btnNewTodo);

  return topStrip;  
}

function todoBox(todo) {
  const fakeTodo = new Todo("Wish List");
  fakeTodo.text = "some text";

  const todoBox = document.createElement("div");
  todoBox.classList.add("box");
  
  const title = document.createElement("h2");
  title.innerText = fakeTodo.title;
  
  const para = document.createElement("p");
  para.innerText = fakeTodo.text;

  todoBox.appendChild(title);
  todoBox.appendChild(para);

  return todoBox;
}

  container.appendChild(doTopStrip());
  container.appendChild(todoBox());
  document.body.appendChild(container);