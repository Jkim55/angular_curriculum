angular.module('httpApp', [])

angular.module('httpApp').controller('httpController', function($scope, $http) {
  // $http.get('https://api.github.com/zen').then(function(data){
  //   $scope.view = {}
  //   $scope.view.zenData = data.data;
  // })
  $http.get('itunes.json').then(function(data){
    $scope.view = {}
    $scope.view.itunesData = data;
  })
})

angular.module('httpApp').controller('httpController', ['$http', '$scope',  function ($http, $scope) {
  $http.post('https://messagehttpservice.herokuapp.com/messages', {
    message: {
      name: "test",
      content: "Test"
    }})
    .then(function () {
      $http.get('https://messagehttpservice.herokuapp.com/messages').then(function(data){
        $scope.messages = {}
        $scope.messages.data = data.data
      }, function errorHandler(error) {
        console.log(error);
      });
    })
}])


// Describe same origin policy and Cross-Origin Resource Sharing (CORS)
    // Same Origin Policy - The same-origin policy restricts how a document or script loaded from one origin can interact with a resource from another origin. It is a critical security mechanism for isolating potentially malicious documents.

    // Cross-Origin Resource Sharing - A resource makes a cross-origin HTTP request when it requests a resource from a different domain than the one which the first resource itself serves. For example, an HTML page served from http://domain-a.com makes an <img> src request for http://domain-b.com/image.jpg. Many pages on the web today load resources like CSS stylesheets, images and scripts from separate domains.


// Questions
// What is a service? Is there a Ruby or JavaScript equivalent to Angular services?
    // Angular services are substitutable objects that are wired together using dependency injection (DI). You can use services to organize and share code across your app. Angular services are: Lazily instantiated – Angular only instantiates a service when an application component depends on it. Maybe it's like classes in js or ruby?

// Explain in as much detail as possible what happens under the hood of $http.get()
    // $http({
    //   method: 'GET',
    //   url: '/someUrl'
    // }).then(function successCallback(response) {
    //     // this callback will be called asynchronously
    //     // when the response is available
    //   }, function errorCallback(response) {
    //     // called asynchronously if an error occurs
    //     // or server returns response with an error status.
    //   });

// What is $q and how does it relate to $http?
    // What are the difference between $http and $q
    // $http executes HTTP requests in an asynchronous manner, which means that you can not be sure about the time when you'll get an answer from the server. $q is a service that provides you the capability to execute multiple asynchronous tasks one after another. That being said they conceptionally do have nothing in common.

    // When should $q be implement over $http and vice versa?
    // Consider a situation where you want to have multiple async HTTP calls to a server. You may have the possibility to nest each of those calls (for instance making the 2nd call in the success callback of the first call). However you find yourself in situations where you have various amounts of calls. You would then use $q to circumvent nesting code.

    // When and best practice for implement $http and $q at the same time?
    // Whenever you have a single HTTP call you should use $http. Whenever you have numerous calls, you should use $q.
