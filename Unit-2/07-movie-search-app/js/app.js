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
    .otherwise({ redirectTo: '/' });
  $locationProvider.html5Mode(true);
})