let myApp = angular.module('myApp', []);


// What are Angular expressions? How do they compare to tags from templating engines you've used before?
    // Javascript like snippets that can be evaluated
    // doesn't handle conditional or loops
    // although it handles filters which takes arguments and are chainable... you shouldn't do complex logic within the expression, similar to hbs

// What happens when you write invalid code in an expression? What type of error do you get?
    // the views prints the expression literally with the handlebars and filters if it exists.

// What are Angular filters? Describe what a filter does and then name four built-in filters, including one that we haven't used yet.
    // manipulates variables passed thru in the ng-model.
    // lowercase, currency, number, limitTo

// What's the syntax for filters?
    // {{ ng-expression | <filtername>: <argument>}}

// Can you use more than one filter?
    // chain it with a '|'

// We'll soon see how to create custom filters. What is a use case for a custom filter?
    // define your own filters
