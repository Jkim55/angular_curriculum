// angular.module("myApp", [])
//
// angular.module("myApp").controller("ScopeController", ($scope) => {
//
// })
//
// angular.module("myApp", [])
// angular.module("myApp").controller("ScopeController",(($rootScope) => {
//   $rootScope.view = {}
// }))


angular.module("broken", []);

angular.module("broken").controller('MainController', (($scope) => {
  $scope.number = 42;
});)

// What is $rootScope?
  // It's the parent scope to all other scopes. Every application has a single root scope. All other scopes descend from $rootScope which we can inject into our controllers (by adding $rootScope as a parameter to the callback function on the .controller method)

// Explain how $scope is passed from a parent to child controller
  // Protypical inheritance

// List five built in directives that create their own scope
  // ng-controller
  // ng-repeat
  // ng-if (actually destroys the scope every time it is false and creates a new one every time it is true - be careful with this one!)
  // ng-view
  // ng-switch
  // ng-include

// "Scope becomes tricky when you try to 2 way data bind to a primitive defined on the parent scope from inside the child scope" - what does this mean?
  // encapsulation to avoid rewritting. Scope is a redence to waht is going on inside the model not to put properties on the model scope. Scope assigns to the model and has properties on those models. Scope watches for changes to properties.
