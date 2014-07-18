'use strict';

gameControllers.controller('LeaderboardCtrl', ['$scope', '$http', function($scope, $http){
  $http.get('../scripts/app-data/leaderboard.js').success(function(data){
    $scope.leaderboards = data;
  });
}]);