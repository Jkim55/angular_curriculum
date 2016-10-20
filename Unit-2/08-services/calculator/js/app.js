angular.module('calcApp', [])

angular.module('calcApp').controller('calcController', function ($scope, calcService) {
  $scope.view = {
    firstNum: '',
    secondNum: '',
    operator: '',
    calculated: null
  }

  $scope.calculate = (operator, fNum, sNum) => {
    console.log('this is operator', operator, fNum, sNum);
    switch(operator) {
      case "add":
        $scope.view.calculated = calcService.add(fNum, sNum)
        break;
      case "subtract":
        $scope.view.calculated = calcService.subtract(fNum, sNum)
        break;
      case "multiply":
        $scope.view.calculated = calcService.multiply(fNum, sNum)
        break;
      case "divide":
        $scope.view.calculated = calcService.divide(fNum, sNum)
        break;
      case "power":
        $scope.view.calculated = calcService.power(fNum, sNum)
    }
  }
})
