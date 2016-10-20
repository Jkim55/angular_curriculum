angular.module("learnServices", [])

angular.module("learnServices").controller('personController', function(personService){
    // I now have access to the personService!
  });

angular.module("learningServices").controller("FirstController", function($scope, firstService) {
  $scope.view = {};
  $scope.view.greeting = firstService.sayHi();
  $scope.view.users = firstService.getAllUsers();
})


// What is a service? What problem do they solve for us?

// What is a singleton? Why would we use them?

// What is the difference between a factory, service and provider?

// Name at least 3 angular built in services that we have used so far.
