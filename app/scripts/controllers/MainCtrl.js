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
    picksState: 'picksOpened', // picksOpened or picksClosed
    gameState: 'preGame', // preGame, postGame, isGame
    sessionState: 'loggedIn', // loggedIn or loggedOut
    poweredBy: 'Sports Technologies, LLC',
    poweredByLink: 'http://www.sportstechinc.com'
  };

  $scope.gameInfo = gameInfo;

  $scope.isCurrentPath = function (path) {
    return $location.path() == path;
  };


  // All of the following *should* be removed from the controller and used a service, I believe.

  $scope.isPicksOpened = function() {
    if (gameInfo.picksState == "picksOpened") {
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

  $scope.logout = function() {
    // this will be rewritten
    gameInfo.sessionState = "loggedOut";
  };

  $scope.login = function() {
    // this will be rewritten
    gameInfo.sessionState = "loggedIn";
  };
  
  $scope.showClick = function() {
    $scope.showContent = function() {
      return true
    };
  };

}]);