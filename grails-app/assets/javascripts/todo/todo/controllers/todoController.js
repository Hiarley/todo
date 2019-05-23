//= wrapped

angular
    .module("todo.todo")
    .controller("TodoController", TodoController);


function TodoController(Todo, $state, $stateParams, $scope) {
    var vm = this;

    vm.todo = new Todo();

    vm.saveTodo = function () {

        vm.errors = undefined;
        var edit = vm.todo.id == null;
        if(edit) {
            vm.todo.$save({}, function () {
                location.reload();
            }, function (response) {
                var data = response.data;
                if (data.hasOwnProperty('message')) {
                    vm.errors = [data];
                } else {
                    vm.errors = data._embedded.errors;
                }
            });
        }else{
            vm.todo.$update(function() {
                location.reload();
            }, function(response) {
                var data = response.data;
                if (data.hasOwnProperty('message')) {
                    vm.errors = [data];
                } else {
                    vm.errors = data._embedded.errors;
                }
            });
        }

    };

    var max = 10, offset = 0;
    Todo.list({max: max, offset: offset}, function (data) {
        vm.todoList = data;
    });



    vm.edit = function (id) {
        vm.todo = Todo.get({id: id});
    };

    vm.delete = function (todo) {

        todo.$delete(function () {
            location.reload();
        }, function () {
            //on error
        });
    };


}


