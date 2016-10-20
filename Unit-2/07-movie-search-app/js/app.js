angular.module('movieApp', ['ngRoute'])

angular.module('movieApp').config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'searchController'
    })
    .when('/movie/:imdbID', {
      templateUrl: 'partials/singleMovie.html',
      controller: 'singleMovieController'
    })
    .when('/:searchTerm', {
      templateUrl: 'partials/results.html',
      controller: 'resultsController'
    })
    // .otherwise('/nope', {
    //   templateUrl: 'partials/error.html',
    //   controller: 'errorController'
    // })
  $locationProvider.html5Mode(true);
})

// switch out bootstrap to ng-bootstrap  or nq-material(don't use jQuery)
// ng-if maybe instead of ng-hide -> spinner, animated gif's  to show before data is recieved from get request
// create error template & controller
// breakout into component folgers: template, controller, services (* if applicable)
// use eslint?
  // es lint init
  // answer the set up q's
  // add dependency

// keep dev tools open!!!
