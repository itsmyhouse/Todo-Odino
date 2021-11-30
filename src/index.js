import {Todo, MyTodo, todoBox} from './todo.js';
import './style.css';

const container = document.querySelector('#container');

const myTodo = new MyTodo();
const fakeTodo = new Todo("try to do")
fakeTodo.text = "somthing here";
myTodo.add(fakeTodo);

function doTopStrip() {
  
  const topStrip = document.createElement("div");

  const label = document.createElement("label");
  label.innerText = "new Todo";

  const inputTitle = document.createElement("input");
  inputTitle.setAttribute("type", "text");

  const textArea = document.createElement("textarea");

  const btnNewTodo = document.createElement("button");
  btnNewTodo.innerText = "create";
  btnNewTodo.addEventListener("click", createTodo);

function createTodo(event) {
    const newTodo = new Todo(inputTitle.value);
    newTodo.text = textArea.value;
    myTodo.add(newTodo);
    addBoxTodo(newTodo);
}

  function addBoxTodo(aTodo) {
    const box = todoBox(aTodo);
    container.appendChild(box);
  }

  topStrip.appendChild(label);
  topStrip.appendChild(inputTitle);
  topStrip.appendChild(textArea);
  topStrip.appendChild(btnNewTodo);

  return topStrip;  
}


  container.appendChild(doTopStrip());
  container.appendChild(todoBox(fakeTodo));
  document.body.appendChild(container);