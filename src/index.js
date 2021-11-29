import printMe from './print.js';
import './style.css';

function component() {
    const element = document.querySelector('#container');
    element.classList.add('hello');

    const btn = document.createElement('button');
  
    element.innerHTML = 'prova webpack ';

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
  
    element.appendChild(btn);
  
    return element;
  }
  
  document.body.appendChild(component());