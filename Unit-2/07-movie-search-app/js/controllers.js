

angular.module('movieApp').controller('searchController', (function ($scope, $http) {
  $scope.view = {}
  $scope.view.searchValue = ""
  $scope.view.movies = null

  $scope.getMovies = (searchTerm) => {
    let searchURL = `http://www.omdbapi.com/?s=${searchTerm}`
    $http.get(searchURL)
      .then((results) => {
        $scope.view.movies = results.data.Search
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
      console.log($scope.view.movieData);
    })
    .catch ((err) => {
      console.log(`There was an error ${err}`);
    })
})
