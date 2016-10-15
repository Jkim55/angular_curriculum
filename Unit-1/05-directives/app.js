// let u1l5App = angular.module("u1l5App", []);
//don't do left assignment.

angular.module("u1l5App", []);

// with left assignment, but don't do this:  u1l5App.controller("u1l5-Controller", (($scope) => {
angular.module("u1l5App").controller("u1l5-Controller", (($scope) => {
  $scope.names = ["Harry", "Ron", "Hermione", "Sirius", "Hedwig", "Tonks"];
  $scope.symbols = ['♠', '&clubs;', '&hearts;', '&diams;']
  $scope.numbers = [1, 1, 2, 5, 6, 9, 9, 9];
  $scope.people = [
    {name:"mike", age:23},
    {name:"andy", age:34},
    {name:"reid", age:45},
    {name:"reid", age:45}
  ]
  $scope.password = ""
  $scope.cameras = [
  {
    title: 'Nikon D3100 DSLR',
    image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',
    rating: 3.4,
    price: 369.99,
    onSale: true
  },
  {
    title: 'Canon EOS 70D',
    image: 'http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg',
    rating: 2.0,
    price: 1099.0,
    onSale: false
  },
  {
    title: 'Nikon D810A',
    image:'http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg',
    rating: 4.2,
    price: 3796.95,
    onSale: true
  }
]
}))

// 1. What is the purpose of ng-init? It initializes application data

// 2.  Why use ng-src and ng-href?
  // ng-src overrides the original src attribute of an <img> element, should be used in place of src
  // ng-href overrides the original href attribute of an <a> element, should be used in place of href

// 3. What are directives?
  // extended HTML attributes with the prefix 'ng-'
      // The ng-app directive initializes an AngularJS application.
      // The ng-init directive initializes application data.
      // The ng-model directive binds the value of HTML controls (input, select, textarea) to application data.
      // directives allow you to put markes on DOM elements suach as attribute, element name, comment, or css class, which tell the AngularJS HTML compilier to attach a specific behavior to that DOM element & transform the DOM element &/or it's children

// 4. Does ng-class require an object to be passed in?
  // NO
    // The ng-class directive dynamically binds one or more CSS classes to an HTML element.

    // The value of the ng-class directive can be a string, an object, or an array.

    // If it is a string, it should contain one or more, space-separated class names.

    // As an object, it should contain key-value pairs, where the key is the class name of the class you want to add, and the value is a boolean value. The class will only be added if the value is set to true.

    // As an array, it can be a combination of both. Each array element can be either a string, or an object, described as above.

// 5. What order does an ng-repeat display items in?
    //  instantiates a template once per item from a collection.aka repeats a set of HTML, a given number of times.

    // The set of HTML will be repeated once per item in a collection.

    // The collection must be an array or an object.

// 6. How does ng-repeat handle duplicate data?
    // Each template instance gets its own scope, where the given loop variable is set to the current collection item, and $index is set to the item index or key.
    // Ordered in the order of the original unless given an filter


// 7. What's happening in each
    // a. ng-cloak
      // used to prevent the Angular html template from being briefly displayed by the browser in its raw (uncompiled) form while your application is loading
    // b. ng-include
      // Fetches, compiles and includes an external HTML fragment.

    // c. ng-pluralize
      // ng-pluralize can be used as a conditional type thing to set logic for messages.
