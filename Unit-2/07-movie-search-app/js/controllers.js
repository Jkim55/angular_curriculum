

angular.module('movieApp').controller('searchController', (function ($scope, $http, $location) {
  $scope.view = {}
  $scope.view.searchValue = ""
  $scope.view.movies = null
  $scope.view.error = null

  $scope.getMovies = (searchTerm) => {
    let searchURL = `http://www.omdbapi.com/?s=${searchTerm}`
    $scope.view.movies = null
    $scope.view.error = null
    $http.get(searchURL)
      .then((results) => {
        if (results.data.Search === undefined){
          $scope.view.error = "No movies were found for the search term"
        } else {
          $scope.view.movies = results.data.Search
        }
      })
      .catch ((err) => {
        console.log(`There was an error ${err}`);
      })
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
