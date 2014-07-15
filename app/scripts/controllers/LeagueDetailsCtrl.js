gameControllers.controller('LeagueDetailsCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('../scripts/app-data/leagues.js').success(function(data) {
    $scope.leagues = data;
    $scope.whichItem = $routeParams.leagueId;
    $scope.countMembers = function(entriesObj) {
      return Object.keys(entriesObj).length;
    }
  });
}]);