//= wrapped

angular
    .module("todo.todo")
    .controller("TodoController", TodoController);


function TodoController(Todo, $state, $stateParams, contextPath, $scope) {
    var vm = this;

    var list = function () {
        Todo.list({max: vm.max, offset: vm.offset}, function (data) {
            vm.todoList = data;
        });
    };


    vm.contextPath = contextPath;

    vm.todo = new Todo();

    vm.saveOrUpdateTodo = function () {
        var isEdit = vm.todo.id != null;

        vm.todo.finalizado = false;
        if(isEdit){
            update();
        }else{
            create();
        }
        vm.todo = new Todo();

        list();


    };
    var create = function () {

        vm.todo.$save({}, function () {
        }, function (response) {
            var data = response.data;
            if (data.hasOwnProperty('message')) {
                vm.errors = [data];
            } else {
                vm.errors = data._embedded.errors;
            }
        });
    }

    var update = function(){
        vm.todo.$update(function() {
        }, function(response) {
            var data = response.data;
            if (data.hasOwnProperty('message')) {
                vm.errors = [data];
            } else {
                vm.errors = data._embedded.errors;
            }
        });  
    };

    var max = 10, offset = 0;
    Todo.list({max: max, offset: offset}, function (data) {
        vm.todoList = data;
    });


    vm.edit = function (id) {
        vm.todo = Todo.get({id: id});
    };


    vm.markTodo = function (todo) {
        alert(todo.finalizado);

    };

    vm.delete = function (todo) {

        todo.$delete(function () {
            list();
        }, function () {
            //on error
        });
    };


}


