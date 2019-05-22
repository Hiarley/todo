//= wrapped
//= require /angular/angular-resource

angular
    .module("todo.todo")
    .factory("Todo", Todo);

function Todo($resource) {
    var Todo = $resource(
        "todo/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true},
         "get": {method: 'GET'}}
    );

    Todo.list = Todo.query;

    Todo.prototype.toString = function() {
        return 'todo.Todo : ' + (this.id ? this.id : '(unsaved)');
    };

    return Todo;
}
