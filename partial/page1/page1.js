angular.module('HelloKitsular').controller('Page1Ctrl',function($scope, $location){

	$scope.title = "First page";
	$scope.param = "";

	$scope.sendParam = function(){
		$location.path("/page3/" + $scope.param);
	};

});