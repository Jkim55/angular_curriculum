var app = angular.module('myApp', []);
app.filter('myFormat', function() {
    return function(x) {
        var i, c, txt = "";
        for (i = 0; i < x.length; i++) {
            c = x[i];
            if (i % 2 == 0) {
                c = c.toUpperCase();
            }
            txt += c;
        }
        return txt;
    };
});

app.controller('namesCtrl', function($scope) {
    $scope.names = [
      'Jani C',
      'Carl B',
      'Margareth S',
      'Hege Z',
      'Joe V',
      'Gustav F',
      'Birgit G',
      'Mary T',
      'Kai Y'
    ]
    $scope.snakecases = [
      'Jani_C',
      'Carl_B',
      'Margareth_S'
    ]

    $scope.caps = [
      'janisjoplin',
      1,
      'hello world'
    ]

    $scope.sentence = "kitteh tent tooop ttet"
});

app.filter('kebab', function () {
  return function (input) {
    return input.replace(/_/g , "-");
  }
})

app.filter('capitalize', function(){
  return function(input, char){
    if(isNaN(input)){
      var char = char - 1 || 0;
      var letter = input.charAt(char).toUpperCase();
      var out = [];
      for(var i = 0; i < input.length; i++){
        if(i === char){
          out.push(letter);
        } else {
          out.push(input[i]);
        }
      }
      return out.join('');
    } else {
      return input;
    }
  }
})

app.filter('redact', function(){
  return function(input, word){
    if(isNaN(input)){
      var redactThis = new RegExp(word,"g");
      return input.replace(redactThis , "REDACT")
    } else {
      return input;
    }
  }
})
