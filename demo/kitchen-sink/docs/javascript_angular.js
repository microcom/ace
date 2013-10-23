var toto = angular.module('app', [])
.controller(['$scope', 'location', function($scope, $location){
	$scope.path = $location.path();
}]);