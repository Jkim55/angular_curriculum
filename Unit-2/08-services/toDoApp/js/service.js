angular.module('toDoApp').service('toDoService', function(){
  this.toDoList = []

  this.addItem = (item) => {
    var item = {
      description: item,
      edit: false
    }
    this.toDoList.push(item)
  },

  this.editItem = (item, index) => {
    this.toDoList[index].description = item
    this.toDoList[index].edit = false
  }

  this.deleteItem = (index) => {
    this.toDoList.splice(index, 1)
  }
})
