'use strict';

myApp.directive('myEntry', function(){
  return {
    restrict: 'AEC',
    templateUrl: 'partials/directives/my-entry.html'
  };
});

myApp.directive('leaderboard', function(){
  return {
    restrict: 'AEC',
    templateUrl: 'partials/directives/leaderboard.html'
  };
});

myApp.directive('leagues', function(){
  return {
    restrict: 'AEC',
    templateUrl: 'partials/directives/leagues.html'
  };
});

myApp.directive('leagueDetails', function(){
  return {
    restrict: 'AEC',
    templateUrl: 'partials/directives/league-details.html'
  };
});

myApp.directive('picks', function(){
  return {
    restrict: 'AEC',
    templateUrl: 'partials/directives/picks.html'
  };
});
