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
    // $scope.score.initalizeGame()
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
    // $scope.score.initalizeGame()
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


angular.module("eventsApp").controller("ColorGenerator", ($scope)=> {
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
    $scope.view.passColor = color
  }
  $scope.view.incrementCounter = () => {
    $scope.view.enterCount++
  }

  $scope.view.replayColors = function() {
    for (let i = $scope.view.colorArray.length-1; i>=0; i--) {
      color = $scope.view.colorArray[i]
      // angular.$timeout(function() {
      //   return true
      // }, 1000)
// for each item in colorArray, display it for 1 sec
    }
  }
})

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
  $scope.initialcontactForm = {};
  $scope.initialcontactForm.clearForm = () => {
    $scope.initialcontactForm.street1 = '';
    $scope.initialcontactForm.street2 = '';
    $scope.initialcontactForm.city = '';
    $scope.initialcontactForm.state = '';
    $scope.initialcontactForm.zip = '';
  }
})


   angular.module("eventsApp").controller('contactController', ($scope) => {
     $scope.view.contact = [];
     $scope.initialcontactForm = {};

     $scope.addContact = function (){
       var contact = {
         name: $scope.initialcontactForm.name,
         email: $scope.initialcontactForm.email,
         phone: $scope.initialcontactForm.phone
       }
       $scope.initialcontactForm.name = '';
       $scope.initialcontactForm.email = '';
       $scope.initialcontactForm.phone = '';

       $scope.view.contact.push(contact)
     }
})



// slow down to speed up! Brooks
// Tortoise v Hare programming
// synchronous blocking brooks method of programming x-P Taylor
