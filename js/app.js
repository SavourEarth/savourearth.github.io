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
  .when("/about", {
      templateUrl : "views/about.html"
  });
});
