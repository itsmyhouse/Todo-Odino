import { Todo } from './todo.js';

function TodoPage() {
    this.todos = [];
}

TodoPage.prototype.add = function(todo) {
    this.todos.push(todo);
}

TodoPage.prototype.remove = function(index) {
    this.todos.splice(index, 1);
}

TodoPage.prototype.indexOf = function(todo) {
    return this.todos.indexOf(todo);
}

export { TodoPage };