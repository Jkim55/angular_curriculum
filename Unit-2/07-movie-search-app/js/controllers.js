

angular.module('movieApp').controller('searchController', (function ($scope, $http, $location, $routeParams){
  $scope.view = {
    searchValue:""
  }
  $scope.getMovies = () => {
    $location.path(`${$scope.view.searchValue}`)
  }
}))

angular.module('movieApp').controller('resultsController', (function ($scope, $http, $location, $routeParams) {
  $scope.view = {
    movies: null,
    error: null,
    searchInput: $routeParams.title || ""
  }

  let movieTitle = $routeParams.title;
  let searchURL = `http://www.omdbapi.com/?s=${movieTitle}`
  $http.get(searchURL)
  .then((results) => {
    if (results.data.Search === undefined){

      $scope.view.error = "No movies were found for the search term"
    } else {
      $scope.view.movies = results.data.Search
      console.log($scope.view.movies);
    }
  })
  .catch ((err) => {
    console.log(`There was an error ${err}`);
  })

  $scope.getMovies = () => {
    $location.path(`${$scope.view.searchInput }`)
  }
}))

angular.module('movieApp').controller('singleMovieController', function($scope, $http, $route) {
  $scope.view = {}
  $scope.view.movieData = null

  let imdbID = $route.current.params.imdbID
  let movieURL = `http://www.omdbapi.com/?i=${imdbID}&plot=full&r=json`
  $http.get(movieURL)
    .then((results) => {
      $scope.view.movieData = results.data
    })
    .catch ((err) => {
      console.log(`There was an error ${err}`);
    })
})
