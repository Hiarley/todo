<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../../../favicon.ico">

    <title>Todo List Grails/AngularJS</title>

    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <!-- Custom styles for this template -->
</head>

<body>

<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <a class="navbar-brand" href="#">Todo List Grails</a>

</nav>

<main role="main" class="container">

    <div class="starter-template">
        <div ng-app="todo.todo" ng-controller="TodoController as vm">
            <br><br><br><br><br><br>
            <h1 style="text-align: center;">Todo List</h1>
            <form class="todo-form" ng-submit="vm.saveTodo()" ontimeupdate="">
                <input  name="descricao" id="descricao" ng-model="vm.todo.descricao" class="form-control form-control-lg" type="text" placeholder="
O que precisa ser feito?"/>


            </form>
            <div id="list-todo" class="content scaffold-list" role="main" ng-cloak>

                <ul class="list-group">
                    <li ng-repeat="todo in vm.todoList" class="list-group-item">
                        <div class="view">

                            <label>{{todo.descricao}}</label>
                            <button class="btn btn-primary" ng-click="vm.edit(todo.id)"><span class="glyphicon">&#x270f;</span></button>

                            <button class="btn btn-danger" ng-click="vm.delete(todo)"><span class="glyphicon">&#xe014;</span></button>
                        </div>
                    </li>
                </ul>

            </div>

        </div>


        <br>

    </div>

    <asset:javascript src="/todo/todo.js"/>
</div>

</main><!-- /.container -->

<!-- Bootstrap core JavaScript
    ================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
</body>
</html>