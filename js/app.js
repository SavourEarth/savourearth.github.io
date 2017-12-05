var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    // templateUrl : "views/home.html",
    // controller: "MainController"
    template : "<h1>Banana</h1><p>Bananas contain around 75% water.</p>"
  .when("/about", {
      templateUrl : "views/about.html"
    })
  });
});
