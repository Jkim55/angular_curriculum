angular.module("redditCloneApp", ["ngAnimate"])

angular.module("redditCloneApp").controller("redditController", ($scope) => {

  $scope.view = {}

  $scope.view.newPostForm = false
  $scope.view.category = ""
  $scope.view.categorydefault = "-date"

// SORT DEFAULT IS BY VOTES
  $scope.setSortCategory= (category) => {
    console.log(category);
    if (category === "restaurant"){
      $scope.view.category = "restaurant"
    } else if (category === "chef"){
      $scope.view.category = "Chef"
    } else if (category === "votes"){
      $scope.view.category = "Votes"
    } else if (category === "date"){
      $scope.view.category = "Date"
    }
  }


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
      date: new Date(),
      votes: 0,
      comments: [],
      viewcomments: false,
      addcomments: false
    }
    console.log($scope.view.posts)
    $scope.view.posts.push(newPost)
  }

  $scope.submitNewPost = (form) => {
    $scope.addNewPost()
    form.$setPristine()
    $scope.post.restaurant = "",
    $scope.post.chef = "",
    $scope.post.author = "",
    $scope.post.imageURL = "",
    $scope.post.description = "",
    $scope.togglePostForm()
  }

  $scope.addComment = () => {
    let newComment = {
      author: "",
      text: ""
    }
    console.log(newComment)
    $scope.post.comments.push(newComment)
  }

  $scope.toggleComments = (post) => {
    post.viewcomments = !post.viewcomments
  }

// SOME DUMMY DATA
  $scope.view.posts = [
    {
      restaurant: "Red Medicine",
      chef: "Jordan Kahn",
      author: "Ji Kim",
      imageURL: "https://cdn1.vox-cdn.com/uploads/chorus_asset/file/7114683/destroyer-sunchoke-dish.jpg",
      description: "Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root sea lettuce brussels sprout cabbage. Catsear cauliflower garbanzo yarrow salsify chicory garlic bell pepper napa cabbage lettuce tomato kale arugula melon sierra leone bologi rutabaga tigernut. Sea lettuce gumbo grape kale kombu cauliflower salsify kohlrabi okra sea lettuce broccoli celery lotus root carrot winter purslane turnip greens garlic. JÃ­cama garlic courgette coriander radicchio plantain scallion cauliflower fava bean desert raisin spring onion chicory bunya nuts. Sea lettuce water spinach gram fava bean leek dandelion silver beet eggplant bush tomato.",
      date: "2016-10-15T07:35:34.693Z",
      votes: 4,
      comments:[{
          author:"dasjfhkh",
          text: "askdfjaksdf"
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
      imageURL: "http://the-talks.com/wp-content/uploads/2016/01/Niki-Nakayama-02.jpg",
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
      imageURL: "http://www.culinaryonline.cz/wp-content/uploads/2014/12/grant-achatz-alinea-05.jpg",
      description: "Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer purslane. Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip chicory salsify pea sprouts fava bean. Dandelion zucchini burdock yarrow chickpea dandelion sorrel courgette turnip greens tigernut soybean radish artichoke wattle seed endive groundnut broccoli arugula.",
      date: "2016-09-27T07:35:34.693Z",
      votes: 0,
      comments:[],
      viewcomments: false,
      addcomments: false
    }
  ]

})
