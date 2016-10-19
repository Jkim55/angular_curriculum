angular.module("applydigest", []).controller("MainController", function($rootScope, $scope) {
  $rootScope.rootView = {};
  $rootScope.rootView.name = "Fido";
  $scope.view = {};
  $scope.view.age = 3;

  // this is for example purposes
  // NOTE - there is a $timeout which handles $apply for you
  setTimeout(function() {
    $rootScope.rootView.name = "Lassie";
    $scope.view.age = 10;
    // $scope.$digest();
    $scope.$apply();
  }, 1000);
});



// QUESTIONS
// What is the difference between $scope.apply and $scope.digest?
    // When you call $scope.$digest() it only runs the digest loop from that particular scope, but when you call $scope.$apply(), that uses the $rootScope and goes through all scopes in the application.

// What is the digest cycle?
    // Digest cycle is like the event loop in vanilla js. It can be considered as a loop, during which Angular checks if there are any changes to all the variables watched by all the $scopes. So if you have $scope.myVar defined in your controller and this variable was marked for being watched, then you are explicitly telling Angular to monitor the changes on myVar in each iteration of the loop.

    // It runs after the $apply function brings a callback into the angular context and consists of 2 sub-loops: $watch list & $evalAsync

    // $watchlist is where dirty checking is done to watch for changes to variables/expression within scope. $digest runs iteratively until DOM is stable

// What is the scope life cycle? (this will require some additional reading)

    // The normal flow of a browser receiving an event is that it executes a corresponding JavaScript callback. Once the callback completes the browser re-renders the DOM and returns to waiting for more events.

    // When the browser calls into JavaScript the code executes outside the Angular execution context, which means that Angular is unaware of model modifications. To properly process model modifications the execution has to enter the Angular execution context using the $apply method. Only model modifications which execute inside the $apply method will be properly accounted for by Angular. For example if a directive listens on DOM events, such as ng-click it must evaluate the expression inside the $apply method.

    // After evaluating the expression, the $apply method performs a $digest. In the $digest phase the scope examines all of the $watch expressions and compares them with the previous value. This dirty checking is done asynchronously. This means that assignment such as $scope.username="angular" will not immediately cause a $watch to be notified, instead the $watch notification is delayed until the $digest phase. This delay is desirable, since it coalesces multiple model updates into one $watch notification as well as guarantees that during the $watch notification no other $watches are running. If a $watch changes the value of the model, it will force additional $digest cycle.

    // Creation
    // The root scope is created during the application bootstrap by the $injector. During template linking, some directives create new child scopes.

    // Watcher registration
    // During template linking, directives register watches on the scope. These watches will be used to propagate model values to the DOM.

    // Model mutation
    // For mutations to be properly observed, you should make them only within the scope.$apply(). Angular APIs do this implicitly, so no extra $apply call is needed when doing synchronous work in controllers, or asynchronous work with $http, $timeout or $interval services.

    // Mutation observation
    // At the end of $apply, Angular performs a $digest cycle on the root scope, which then propagates throughout all child scopes. During the $digest cycle, all $watched expressions or functions are checked for model mutation and if a mutation is detected, the $watch listener is called.

    // Scope destruction
    // When child scopes are no longer needed, it is the responsibility of the child scope creator to destroy them via scope.$destroy() API. This will stop propagation of $digest calls into the child scope and allow for memory used by the child scope models to be reclaimed by the garbage collector.


// What does "bootstrapping an angular app" mean?

    // Bootstrapping is the equivalent of initializing, or starting, your Angular app. There are two ways to do this: automatic & manual

    // Automatically bootstrapping is done by
    // adding `ng-app="myApp"` in <html> tag.

    // Manual bootstraping occurs from the JavaScript file after having creating your app.
      // ie:
      // angular.module("myApp", []);
      // angular.bootstrap(document, ['myApp']);

// What is the diff between $evalAsync & $timeout
    // if code is queued using $evalAsync from a directive, it should run after the DOM has been manipulated by Angular, but before the browser renders

    // if code is queued using $evalAsync from a controller, it should run before the DOM has been manipulated by Angular (and before the browser renders) -- rarely do you want this

    // if code is queued using $timeout, it should run after the DOM has been manipulated by Angular, and after the browser renders (which may cause flicker in some cases)
