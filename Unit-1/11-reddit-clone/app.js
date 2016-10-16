angular.module("redditCloneApp", ['angularMoment', 'ngAnimate'])

angular.module("redditCloneApp").controller("redditController", ($scope) => {

  $scope.view = {}
  $scope.view.newPostForm = false
  $scope.view.newcommentForm = false
  $scope.view.category = null
  $scope.view.categorysort = "-votes"
  $scope.view.fuzzyFinder = ""

// SORT DEFAULT IS BY VOTES
  $scope.setSortCategory = (category) => {
    if (category === "restaurant"){
      $scope.view.category = "Restaurant"
      $scope.view.categorysort = "restaurant"
    } else if (category === "chef"){
      $scope.view.category = "Chef"
      $scope.view.categorysort = "chef"
    } else if (category === "votes"){
      $scope.view.category = "Votes"
      $scope.view.categorysort = "-votes"
    } else if (category === "date"){
      $scope.view.category = "Date"
      $scope.view.categorysort = "-date"

    }
  }


// SUBMIT POST
  $scope.togglePostForm = () => {
    $scope.view.newPostForm = !$scope.view.newPostForm
  }

  $scope.addNewPost = () => {
    let newPost = {
      restaurant: $scope.post.restaurant,
      chef: $scope.post.chef,
      author: $scope.post.author,
      imageURL: $scope.post.imageURL,
      description: $scope.post.description,
      date: new Date().getTime(),
      votes: 0,
      comments: [],
      viewcomments: false,
      addcomments: false
    }
    $scope.view.posts.push(newPost)
  }

  $scope.submitNewPost = (form) => {
    $scope.addNewPost()
    form.$setPristine()
    form.$setUntouched()
    $scope.post.restaurant = "",
    $scope.post.chef = "",
    $scope.post.author = "",
    $scope.post.imageURL = "",
    $scope.post.description = "",
    $scope.togglePostForm()
  }

// SUBMIT COMMENTS
  $scope.toggleCommentForm = () => {
    $scope.view.newcommentForm = !$scope.view.newcommentForm
  }

  $scope.toggleComments = (post) => {
    post.viewcomments = !post.viewcomments
  }

  $scope.addNewComment = (post) => {
    let newComment = {
      author: post.comments.author,
      text: post.comments.text
    }
    post.comments.push(newComment)
  }

  $scope.submitComment = (form, post) => {
    $scope.addNewComment(post)
    form.$setPristine()
    form.$setUntouched()
    post.comments.author = "",
    post.comments.text= "",
    $scope.toggleCommentForm()
    $scope.toggleComments(post)
  }

// COMMENTS
  $scope.voteUp= (post) => {
    post.votes++
  }

  $scope.voteDown= (post) => {
    post.votes--
  }

// SOME DUMMY DATA
  $scope.view.posts = [
    {
      restaurant: "Red Medicine",
      chef: "Jordan Kahn",
      author: "Ji Kim",
      imageURL: "./img/jordan-kahn-destroyer-sunchoke-dish.jpg",
      description: "Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root sea lettuce brussels sprout cabbage. Catsear cauliflower garbanzo yarrow salsify chicory garlic bell pepper napa cabbage lettuce tomato kale arugula melon sierra leone bologi rutabaga tigernut. Sea lettuce gumbo grape kale kombu cauliflower salsify kohlrabi okra sea lettuce broccoli celery lotus root carrot winter purslane turnip greens garlic. Ji­cama garlic courgette coriander radicchio plantain scallion cauliflower fava bean desert raisin spring onion chicory bunya nuts. Sea lettuce water spinach gram fava bean leek dandelion silver beet eggplant bush tomato.",
      date: "2016-10-15T07:35:34.693Z",
      votes: 6,
      comments:[{
          author:"dasjfhkh",
          text: "askdfjaksdfadd"
        },
        {
          author:"aldkjflasz",
          text: "dsfkjhakdsf"
        }
      ],
      viewcomments: false,
      addcomments: false
    },
    {
      restaurant: "n/naka",
      chef: "Niki Nakayama",
      author: "M. Lee",
      imageURL: "./img/Niki-Nakayama-nnaka.jpg",
      description: "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jÃ­cama salsify.",
      date: "2016-10-14T07:35:34.693Z",
      votes: 3,
      comments:[{
          author: "rando",
          text: "bladkfjglk"
        }
      ],
      viewcomments: false,
      addcomments: false
    },
    {
      restaurant: "Alinea",
      chef: "Grant Achatz",
      author: "L. Tran",
      imageURL: "./img/grant-achatz-alinea.jpg",
      description: "Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer purslane. Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip chicory salsify pea sprouts fava bean. Dandelion zucchini burdock yarrow chickpea dandelion sorrel courgette turnip greens tigernut soybean radish artichoke wattle seed endive groundnut broccoli arugula.",
      date: "2016-09-27T07:35:34.693Z",
      votes: 4,
      comments:[],
      viewcomments: false,
      addcomments: false
    }
  ]

})
