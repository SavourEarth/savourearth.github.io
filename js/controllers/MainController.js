app.controller('MainController', ['$scope', function($scope) {
  $scope.msg = "I love Bood";
  $scope.facts=[
    {
      background:'img/savourearth5.jpg',
      text:'I want the hungry to be fed.'
      },
    {
      background:'img/savourearth1.jpg',
      text:'I want wars caused by drought to end.'
      },
    {
      background:'img/savourearth4.jpg',
      text:'I want climate change reversed.'
      },
    {
      background:'img/savourearth3.jpg',
      text:'I want rainforests to last for generations.'
      },
    {
      background:'img/savourearth2.jpg',
      text:'I want to remain active for all my life.'
    }
  ]

}]);
