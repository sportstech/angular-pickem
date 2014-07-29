'use strict';

var myApp = angular.module('myApp', [
    "ngRoute",
    "gameControllers",
    'ui.sortable'
    ]);

var gameControllers = angular.module('gameControllers', []);

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/landing', {
      templateUrl: 'partials/landing.html'
      // controller: 'LandingCtrl'
    })
    .when('/leagues', {
      templateUrl: 'partials/leagues.html',
      controller: 'LeagueCtrl'
    })
    .when('/leagues-details/:leagueId', {
      templateUrl: 'partials/leagues-details.html',
      controller: 'LeagueDetailsCtrl'
    })
    .when('/login', {
      templateUrl: 'partials/login.html'
    })
    .when('/picks', {
      templateUrl: 'partials/picks.html',
      controller: "PicksCtrl"
    })
    .when('/leaderboard', {
      templateUrl: 'partials/leaderboard.html',
      controller: 'LeaderboardCtrl'
    })
    .otherwise({redirectTo:'/landing'})
}]);