angular.module('HelloKitsular').controller('NavigationCtrl',function($scope){

	$scope.navLinks = [
			{
				"text": "First page",
				"url": "#page1"
			},
			{
				"text": "Second page",
				"url": "#page2"
			},
			{
				"text": "Third page",
				"url": "#page3"
			}
		];
});