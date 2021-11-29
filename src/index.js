function component() {
    const element = document.querySelector('#container');
  
    element.innerHTML = 'prova webpack ';
  
    return element;
  }
  
  document.body.appendChild(component());