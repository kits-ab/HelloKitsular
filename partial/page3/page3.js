angular.module('HelloKitsular').controller('Page3Ctrl',function($scope, $routeParams){

	$scope.title = "Parameter Passed:";
	$scope.id= "No param passed";

	$scope.checkParam = function(){
		if ($routeParams.id) {
			$scope.id = $routeParams.id;
		}
	};
	
	$scope.checkParam();

});