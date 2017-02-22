angular.module('HelloKitsular').controller('Page3Ctrl',function($scope, $routeParams){

	$scope.title = "Third page";
	$scope.id= "No param passed";

	$scope.checkParam = function(){
		if ($routeParams.id) {
			$scope.id = $routeParams.id;
		}
	};
	
	$scope.checkParam();

});