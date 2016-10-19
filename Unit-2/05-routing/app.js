angular.module("routingApp", ['ngRoute']);

angular.module("routingApp").config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    })
    .when('/dogs', {
      templateUrl: 'partials/dogs.html',
      controller: 'DogsController'
    })
    .when('/add', {
      templateUrl: 'partials/calc.html',
      controller: 'addController'
    })
    .when('/sub/:num1/:num2', {
      templateUrl: 'partials/calc.html',
      controller: 'subController'
    })
    .when('/:path', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    })
    .otherwise({ redirectTo: '/' });
  $locationProvider.html5Mode(true);
});

angular.module("routingApp").controller('HomeController', function($scope){
  $scope.view = {};
  $scope.view.message = "Welcome!"
});

angular.module("routingApp").controller('DogsController', function($scope){
  $scope.view = {};
  $scope.view.message = "Woof Woof!"
});

// with $routeParams
angular.module("routingApp").controller('subController', ['$scope', '$routeParams', '$route', function ($scope, $routeParams, $route) {
  $scope.total = Number($routeParams.num1) - Number($routeParams.num2)
}])

// with query strings.
angular.module("routingApp").controller('addController', ['$scope', '$routeParams', '$route', '$location', function ($scope, $routeParams, $route, $location) {
  var x = $location.search()['x']
  var y = $location.search()['y']
  var z = $location.search()
  $scope.total = Number(x) + Number(y) + Number(z.z)
  // $scope.total = Number($route.current.params.x) + Number($route.current.params.y)
}])

// QUESTION: Why does Angular put a # in the route path?
    // You need the # (hashtag) for non HTML5 browsers.

    // Otherwise they will just do an HTTP call to the server at the mentioned href. The # is an old browser shortcircuit which doesn't fire the request, which allows many js frameworks to build their own clientside rerouting on top of that.

    // You can use $locationProvider.html5Mode(true) to tell angular to use HTML5 strategy if available.

// Why isn't ngRoute part of Angular core? Name at least 2 other Angular modules we could use
    // Removed from core sometime ago, ngRoute module, was too basic for more sophisticated routing. NgRouter & UI-Router are alternatives to ngRoute, which allow for state nesting, route abstraction, optional/required parameters.

// Compare and contrast client-side routing with server-side routing
    // client side routing is one entirely in the browser and doesn't require an hit to the server

// Aside from route definitions, what else can go in a .config()?
    // dependencies can be injected into .config()

// What is the $routeChangeSuccess event?
    // It is an event that is broadcasted after a route change has happened successfully. The resolve dependencies are now available in the current.locals property.
