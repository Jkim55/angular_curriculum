angular.module('calcApp').service('calcService', function () {
    this.add = (a, b) => { return a + b }
    this.subtract = (a, b) => { return a - b }
    this.multiply = (a, b) => { return a * b }
    this.divide = (a, b) => { return a / b }
    this.power = (a, b) => { return Math.pow(a, b) }
})
