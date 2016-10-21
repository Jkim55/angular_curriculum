angular.module('toDoApp').controller('toDoController', function ($scope, toDoService) {
  $scope.view = {}
  $scope.view.toDoItem = ''
  $scope.view.toDoEditItem = ''
  $scope.view.toDoList = toDoService.getList()

  $scope.addItem = (form) => {
    let singleItem = toDoService.addItem($scope.view.toDoItem)
    form.$setPristine()
    $scope.view.toDoItem = ''
  }

  $scope.toggleEditForm = (item) => {
    item.edit = !item.edit
  }

  $scope.editItem = (item, index) => {
    console.log(item);
    toDoService.editItem(item, index)
    item.edit = false
  }

  $scope.deleteItem = (index) => {
    toDoService.deleteItem(index)
  }
})
