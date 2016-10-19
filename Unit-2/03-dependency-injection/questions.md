# Define the Terms

1. Single Responsibility Principle
The Single Responsibility Principle (SRP) states that each software module should have one and only one reason to change.
ie
A function does one thing and only one thing

2. Interface
Interfaces is the system that determines how classes in OOP interact with their properties & methods.

Complier will catch error with interfaces and enforce the interface.

3. Duck Typing
In computer programming with object-oriented programming languages, duck typing is a style of dynamic typing in which an object's current set of methods and properties determines the valid semantics, rather than its inheritance from a particular class or implementation of a specific interface.

4. Law of Demeter
Law of Demeter also known as principle of least knowledge is a coding principle, which says that a module should not know about the inner details of the objects it manipulates. If a code depends upon internal details of a particular object, there is good chance that it will break as soon as internal of that object changes. Since Encapsulation is all about hiding internal details of object and exposing only operations, it also assert Law of  Demeter.

5. Tight Coupling (in contrast with Loose Coupling)
Tight coupling is when a group of classes are highly dependent on one another.

This scenario arises when a class assumes too many responsibilities, or when one concern is spread over many classes rather than having its own class.

Loose coupling is achieved by means of a design that promotes single-responsibility and separation of concerns.

A loosely-coupled class can be consumed and tested independently of other (concrete) classes.

Interfaces are a powerful tool to use for decoupling. Classes can communicate through interfaces rather than other concrete classes, and any class can be on the other end of that communication simply by implementing the interface.

6. Separation of Concerns
In computer science, separation of concerns (SoC) is a design principle for separating a computer program into distinct sections, such that each section addresses a separate concern. A concern is a set of information that affects the code of a computer program.

7. So how can we share dependencies amongst our modules and still write clean code?

There are only three ways a component (object or function) can get a hold of its dependencies:

The component can create the dependency, typically using the new operator.
The component can look up the dependency, by referring to a global variable.
The component can have the dependency passed to it where it is needed.
EXERCISE - What are some potential issues with the first two options?

The first two options of creating or looking up dependencies are not optimal because they hard code the dependency to the component. This makes it difficult, if not impossible, to modify the dependencies. This is especially problematic in tests.

The third option is the most viable, since it removes the responsibility of locating the dependency from the component. The dependency is simply handed to the component.

In angular, we take our dependencies (which we call services - we will learn more about these in another unit) and inject them into a dependent object (controller/directive/filter). This separates the creation of the dependency from its behavior and enables the client to abide by the single responsibility principle.

# Ways to Annotate Dependencies
https://docs.angularjs.org/guide/di
Angular invokes certain functions (like service factories and controllers) via the injector. You need to annotate these functions so that the injector knows what services to inject into the function.
There are 3 ways to annotate our code (define dependencies) in angular:

1. Implicit annotation
The implicit annotation dependency injection will break when you minify your code. This happens because minification tools rename variables to a something smaller, but the minification tool doesn't know that the variable name in the function is meaningful to angular.

```js
      someModule.controller('MyController', function($scope, greeter) {
        // ...
      });
```

2. Inline array annotation
For now, use inline array annotation (it is the most commonly seen and is stated as "preferred" by the angular docs). In more recent style guides however, it is recommended that the $inject property be used.

```js
      someModule.controller('MyController', ['$scope', 'greeter', function($scope, greeter) {
        // ...
      }]);
```

3. $inject Property Annotation
To allow the minifiers to rename the function parameters and still be able to inject the right services, the function needs to be annotated with the $inject property. The $inject property is an array of service names to inject.

```js
      var MyController = function($scope, greeter) {
        // ...
      }
      MyController.$inject = ['$scope', 'greeter'];
      someModule.controller('MyController', MyController);
```
In this scenario the ordering of the values in the $inject array must match the ordering of the parameters in MyController.

Just like with the array annotation, you'll need to take care to keep the $inject in sync with the parameters in the function declaration.

## Review Question on Dependency-Injections:
1. What is dependency injection?
Dependency injection used to write modular code in angular, which is done by having small containers (module) to be dependent on other modules.

2. How does angular implement dependency injection?
In general, the component can have the dependency passed to it where it is needed. In particular, within angular, we take our dependencies (aka services) and inject them into a dependent object (controller/directive/filter). This separates the creation of the dependency from its behavior and enables the client to abide by the single responsibility principle.

What are the three ways to annotate our code with service names (dependencies)? Write three code examples with each one of these options.

1. Implicit Annotation
```js
someModule.controller('MyController', function($scope, greeter) {
  // ...
});
```

2. Inline Array Annotation
```js
someModule.controller('MyController', ['$scope', 'greeter', function($scope, greeter) {
  // ...
}]);
```

3. $inject Property Annotation
```js
var MyController = function($scope, greeter) {
  // ...
}
MyController.$inject = ['$scope', 'greeter'];

someModule.controller('MyController', MyController);
```
