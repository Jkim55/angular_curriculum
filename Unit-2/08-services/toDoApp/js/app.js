angular.module('toDoApp', ['ngRoute'])

angular.module("toDoApp").config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'partials/main.html',
    controller: 'toDoController'
  })
})
