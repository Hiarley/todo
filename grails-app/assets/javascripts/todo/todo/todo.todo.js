//= wrapped
//= require /angular/angular 
//= require /angular/angular-ui-router
//= require /angular/angular-resource
//= require /todo/core/todo.core
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain
//= require_tree templates

angular.module("todo.todo", ["ui.router", "ngResource", "todo.core"]).config(config);

function config($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('todo', {
            url: "/",
            templateUrl: "/todo/todo/crudTodo.html",
            controller: "TodoController as vm"
        });

    $urlRouterProvider.otherwise('/');
}
