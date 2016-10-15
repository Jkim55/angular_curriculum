angular.module("animateApp", ['ngAnimate'])

angular.module("animateApp").controller("MainController", ($scope) => {
  $scope.view = {};
  $scope.view.instructors = ["Tim", "Ian", "Matt", "Elie"];
})

angular.module("animateApp").controller('animateController', function($scope) {
    $scope.fade = false;
});
