var app = angular.module("myApp", ["ngRoute","ngAnimate"]);
app.config(function($routeProvider) {

  $routeProvider
  .when("/", {
     controller: "MainController",
     templateUrl : "views/home.html"

    })
    .when("/cat/:topic", {
       controller: "FactController",
       templateUrl : "views/facts.html"
      })
      .when("/:topic/:subtopic", {
         controller: "DetailController",
         templateUrl : "views/detail.html"
        })
  .when("/about", {
      templateUrl : "views/about.html"
  });
});

app.run(function($rootScope) {
    $rootScope.teasers = [
      {
        background:'img/savourearth5.jpg',
        text:'I want the hungry to be fed.',
        topic:'hunger'
        },
      {
        background:'img/savourearth1.jpg',
        text:'I want wars caused by drought to end.',
        topic:'drought'
        },
      {
        background:'img/savourearth4.jpg',
        text:'I want climate change reversed.',
        topic:'climate'
        },
      {
        background:'img/savourearth3.jpg',
        text:'I want rainforests to last for generations.',
        topic:'rainforests'
        },
      {
        background:'img/savourearth2.jpg',
        text:'I want to remain active for all my life.',
        topic:'active'
      }
    ];
    $rootScope.subtopics=[
      {
        topic:'hunger',
        subtopic:
          [
            {
              title:'Cow Question',
              link:'cows'
            },
            {
              title:'Pig Question',
              link:'pigs'
            }
          ]
        },
      {
        topic:'drought',
        subtopic:
          [
            {
              title:'Question 1',
              link:'q1'
            }
          ]
        }
    ]
});
