'use strict';

gameControllers.controller('MainCtrl', ['$scope', '$location', '$http', function($scope, $location, $http){
  $scope.siteName = 'Pick\'em App Angular Redesign';
  var gameInfo = {
    name: 'Pick\'em App Angular Redesign',
    description: 'Here\'s a description of the Breeders\' Cup Million Dollar Challenge',
    socialMedia: {
      facebook: 'http://www.facebook.com',
      twitter: 'http://www.twitter.com',
      google: 'http://www.google.com'
    },
    gameState: 'picksOpened', // postLock
    sessionState: 'loggedIn',
    poweredBy: 'Sports Technologies, LLC',
    poweredByLink: 'http://www.sportstechinc.com'
  };
  $scope.gameInfo = gameInfo;

  $scope.isCurrentPath = function (path) {
    return $location.path() == path;
  };

  $scope.isPicksOpened = function() {
    if (gameInfo.gameState == "picksOpened") {
      return true;
    } else {
      return false;
    }
  };

  $scope.isLoggedIn = function() {
    if (gameInfo.sessionState == "loggedIn") {
      return true;
    } else {
      return false;
    }
  };

}]);