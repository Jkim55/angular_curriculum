// // When does a form/input have a property of $valid? What class accompanies this property?
//     // ng-valid: Boolean that indicates whether an item is currently valid based on the rules you placed.
// // When does a form/input have a property of $invalid? What class accompanies this property?
//     // ng-invalid:	Boolean that indicates whether an item is currently invalid based on the rules you placed.
// // When does a form/input have a property of $pristine? What class accompanies this property?
//     	// ng-pristin:e	Boolean that's true if the form/input has not been used yet.
// // When does a form/input have a property of $dirty? What class accompanies this property?
//     // ng-dirty:	Boolean that's true if the form/input has been used.
// // When does a form/input have a property of $touched? What class accompanies this property?
//     // ng-touched:	Boolean that's true if the input has been blurred
// // What does blurred mean? (research the blur event)
// // An event when an element loses focus


angular.module("validationApp", [])

angular.module("validationApp").controller("userFormController", ($scope) => {
  $scope.initial  = {
    username: "",
    password: "",
    email:"",
    zip: ""
  }

  $scope.userForm = angular.copy($scope.initial)
  $scope.userForm.users = []
  $scope.userForm.usersExist = false

  $scope.userForm.addUser = () => {
    let userData = {
      username: $scope.userForm.username,
      password: $scope.userForm.password,
      email: $scope.userForm.email,
      zip: $scope.userForm.zip
    }

    $scope.userForm.users.push(userData)
  }

  $scope.userForm.submit = (form) => {
    $scope.userForm.usersExist = true
    $scope.userForm.addUser()
    form.$setPristine()
    $scope.userForm.username = '';
    $scope.userForm.password = '';
    $scope.userForm.email = '';
    $scope.userForm.zip = '';
  }
})
