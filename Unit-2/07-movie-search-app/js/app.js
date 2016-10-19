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
    .when('/:title', {
      templateUrl: 'partials/results.html',
      controller: 'resultsController'
    })
    .otherwise('/nope');
  $locationProvider.html5Mode(true);
})
