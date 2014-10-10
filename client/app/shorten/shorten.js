angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function(linkData) {
    Links.addLink(linkData)
    .then(function(data) {
      // console.log(data);
    });
  };
});
