angular.module('toDoApp').service('toDoService', function(){
  let toDoList = []

  this.getList = () => {
    return toDoList
  }

  this.addItem = (item) => {
    var item = {
      description: item,
      edit: false
    }
    toDoList.push(item)
  },

  this.editItem = (item, index) => {
    console.log('inside editItem()',item);
    toDoList[index].description = item.description
    toDoList[index].edit = false
  }

  this.deleteItem = (index) => {
    toDoList.splice(index, 1)
  }
})
