angular.module("firstApp", [])

angular.module("firstApp").controller("MyFirstController",(($scope) => {
  $scope.name = "Severs Snape"
}))

angular.module("firstApp").controller("ExercisesController", (($scope) => {
  $scope.favColor = "poppy";
  $scope.secondsInACentury = () => {
    let secPerHour = 60 * 60
    let hourPerWeek = 24 * 7
    let weeksPerCentury = 52 * 100
    return secPerHour * hourPerWeek * weeksPerCentury
  }
  $scope.rightNow = new Date();
//
}))

angular.module("firstApp").controller("madLibsController",
  (($scope) => {
    $scope.initial = {
      boyName: null,
      adj: null,
      noun1: null,
      noun2: null,
      noun3: null,
      insect: null,
      verb: null
    }

    $scope.showLibs = false;

    $scope.madLibData = angular.copy($scope.initial);

    $scope.toggleLibs = () => {
      $scope.showLibs = !$scope.showLibs
    }

    $scope.reset = () => {
        $scope.madLibData = angular.copy($scope.initial)
        $scope.toggleLibs()
      }
  }))


// What is $scope?
// $scope is a JavaScript object that glues together controllers and views.. It autopmatically exists and is automatically injected into our view Properties that are on the $scope object are available to both the view and the controller.

// All properties added to the $scope are automatically available in our view.
// Most applications have a main method that instantiates and wires together the different parts of the application.

// Angular apps don't have a main method. Instead modules declarativel specify how an application should be bootstrapped. There are several advantages to this approach:

// The declarative process is easier to understand.
// You can package code as reusable modules.
// The modules can be loaded in any order (or even in parallel) because modules delay execution.
// Unit tests only have to load relevant modules, which keeps them fast.
// End-to-end tests can use modules to override configuration.
// What are Angular modules? What's the syntax for defining a module?
// You can think of a module as a container for the different parts of your app – controllers, services, filters, directives, etc.

// angular.module('myApp', [])

// Why do we pass in $scope as an argument to controller functions?
// that's how the module attaches the model with the controllers.

// In Express, what are Angular controllers most analogous to?
// routes perhaps?
