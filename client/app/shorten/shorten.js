angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.shortenedLink = {};
  $scope.addLink = function() {
    Links.addLink($scope.link)
    .then(function(data) {
      console.log("Link successfully shortened.");
      $scope.shortenedLink = data;
      $scope.link = {};
    });
  };
});
