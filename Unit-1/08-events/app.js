angular.module("eventsApp", [])

angular.module("eventsApp").controller('randoNumController', (($scope) => {
  $scope.view = {};
  $scope.view.number = 5;

  $scope.pickRandomNumber = () => {
    $scope.view.number = Math.floor(Math.random() * 10) + 1;
  }
}))

angular.module("eventsApp").controller('wordReverser', (($scope) => {
    $scope.view = {}
    $scope.view.word = null
    $scope.reverseWord = (word) => {
      $scope.view.word = word.split('').reverse().join('')
    }
}))

angular.module("eventsApp").controller('pingPongScorer', (($scope) => {
  $scope.player1 = {
    score: 0,
    serving: false,
    winner: false,
    loser:false
  }

  $scope.player2 = {
    score: 0,
    serving: false,
    winner: false,
    loser:false
  }

  $scope.score = {}
  $scope.score.gameCount = 0

  $scope.score.findWinner = () => {
    if ($scope.player1.score > $scope.player2.score){
      $scope.player1.winner = true
      $scope.player2.loser = true
    } else {
      $scope.player1.loser = true
      $scope.player2.winner = true
    }
  }

  $scope.score.findServer = () => {
    if ($scope.score.gameCount === 1 ){
      $scope.player1.serving = true
      $scope.player2.serving = false
    } else if ($scope.score.gameCount % 2 === 1){
      $scope.player1.serving = !$scope.player1.serving
      $scope.player2.serving = !$scope.player2.serving
    }
  }

  $scope.score.reset = () => {
    $scope.player1.score = 0
    $scope.player2.score = 0
    $scope.score.gameCount = 0
    $scope.player1.winner = false
    $scope.player2.loser = false
    $scope.player1.loser = false
    $scope.player2.winner = false
  }

  $scope.score.addScoreP1 = () => {
    $scope.score.gameCount++
    $scope.score.findServer()
    if ($scope.score.gameCount > 11 ){
      $scope.score.findWinner()
    } else if ($scope.score.gameCount === 11 ){
      $scope.player1.score++
      $scope.score.findWinner()
    } else {
      $scope.player1.score++
    }
  }

  $scope.score.addScoreP2 = () => {
    $scope.score.findServer()
    $scope.score.gameCount++
    if ($scope.score.gameCount > 11 ){
      $scope.score.findWinner()
    } else if ($scope.score.gameCount === 11 ){
      $scope.player2.score++
      $scope.score.findWinner()
    } else {
      $scope.player2.score++
    }
  }
}))


angular.module("eventsApp").controller("ColorGenerator", ($scope, $timeout)=> {
  $scope.view = {}
  $scope.view.enterCount = 0
  $scope.view.passColor = "black"
  $scope.view.colorArray = []

  $scope.view.randomColor = () => {
    $scope.view.incrementCounter()
    let x = Math.round(0xffffff * Math.random()).toString(16);
    let y = (6-x.length);
    let z = "000000";
    let z1 = z.substring(0,y);
    let color = "#" + z1 + x;
    $scope.view.colorArray.push(color)
    console.log('pre replay', $scope.view.colorArray);
    $scope.view.passColor = color
  }
  $scope.view.incrementCounter = () => {
    $scope.view.enterCount++
  }

// recusive method
  $scope.view.replayColors = () => {
    let index = $scope.view.colorArray.length-1
    let displayPreviousColor = () => {
      $scope.view.passColor = $scope.view.colorArray[index]
      index--
      if (index >= 0){
        $timeout(displayPreviousColor, 1000)
      }
    }
    displayPreviousColor()
}})

//iterative
// $scope.view.replay = function() {
//   $scope.view.reversedArray = $scope.view.colorArray.reverse()
//   for( var i = 0; i < $scope.view.reversedArray.length; i++) {
//       (function(i){
//       $timeout( function(){
//           $scope.view.callAtTimeout($scope.view.reversedArray[i]);
//       }, i * 1000);
//       })(i)
//   }
//   $scope.view.callAtTimeout = function(elementColor) {
//       $scope.view.passColor = elementColor;
//   }
// }


angular.module("eventsApp").controller("formController", ($scope) =>{
  $scope.favoriteForm = {};
  $scope.favoriteForm.name= ''
  $scope.submitFav = function() {
    var favPi = parseFloat($scope.favoriteForm.favoritePie);
    // Special output if the favorite pie is a certain number
    if (!isNaN(favPi) && favPi >= 3.14 && favPi <= 3.142) {
      $scope.favoriteForm.favoritePie = "\u03A0";
    }
    console.log("Your favorite pie is: ", $scope.favoriteForm.favoritePie);
  };
})

angular.module("eventsApp").controller('addressController', ($scope) => {
  $scope.initial = {
    street1: "",
    street2: "",
    city:"",
    state: "",
    zip: ""
  };

  $scope.addyFormData = angular.copy($scope.initial);

  $scope.addyFormData.clearForm = () => {
    $scope.addyFormData = angular.copy($scope.initial);
  }
})


angular.module("eventsApp").controller('contactController', ($scope) => {
  $scope.initial = {
    name: "",
    email: "",
    phone: ""
  }

  $scope.contactApp = angular.copy($scope.initial)
  $scope.contactApp.contacts = []

  $scope.contactApp.clearForm = () => {
    $scope.contactApp = angular.copy($scope.initial);
  }

  $scope.contactApp.addContact = function (){
    let contact = {
      name: $scope.contactApp.name,
      email: $scope.contactApp.email,
      phone: $scope.contactApp.phone
    }
    $scope.contactApp.contacts.push(contact)
    console.log('added contact', $scope.contactApp.contacts);
  }

  $scope.contactApp.submit = () => {
    $scope.contactApp.addContact()
    $scope.contactApp.name = ""
    $scope.contactApp.email = ""
    $scope.contactApp.phone = ""
    console.log($scope.contactApp.contacts);
  }
})



// slow down to speed up! Brooks
// Tortoise v Hare programming
// synchronous blocking brooks method of programming x-P Taylor
// sanity check: check that you can access angular expressions
