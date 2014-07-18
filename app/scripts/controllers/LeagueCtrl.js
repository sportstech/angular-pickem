'use strict';

gameControllers.controller('LeagueCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('../scripts/app-data/leagues.js').success(function(data) {
    $scope.leagues = data;
    $scope.countMembers = function(entriesObj) {
      return Object.keys(entriesObj).length;
    }
  });
}]);