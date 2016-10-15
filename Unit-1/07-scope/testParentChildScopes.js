var parentScope = function(){
 this.aString = "parent string"
 this.aNumber = 100
 this.anArray = [10,20,30]
 this.anObject = {property1: "parent prop1"}
 this.aFunction = function(){return 'parent output'}
}

// let's create a new instance of the parentScope
var parent = new parentScope

var childScope = function(){}

// let's set the prototype of the childScope to be the parent instance
// we have normally not seen this, because we have inherited from another constructors prototype and the properties/methods of an instance
childScope.prototype = parent

// let's create a new instance of the childScope
var child = new childScope

child.aString === 'parent string'
child.anArray[1] === 20
child.anObject.property1 === 'parent prop1'
child.aFunction() === 'parent output'

// do not consult the prototype chain!
child.aString = 'child string'

// consult the prototype chain!
child.anArray[1] = 22
child.anObject.property1 = 'child prop1'

// do not consult the prototype chain!
child.anArray = [100, 555]
child.anObject = { name: 'Mark', country: 'USA' }

delete child.anArray
child.anArray[1] === 22  // true
