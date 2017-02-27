angular.module('HelloKitsular').controller('Page3Ctrl',function($scope, $routeParams, repos, gitdata){

    $scope.title = "Parameter Passed:";
    $scope.id= "No param passed";
   // $scope.loading = true;
    $scope.user={
        "userinfo": {},
        "userrepos" : []
     };
    
    $scope.checkParam = function(){
        if ($routeParams.id) {
            $scope.getUserInfo($routeParams.id);
            $scope.id = $routeParams.id;
        }
    };

    $scope.getUserInfo = function(user) {
        repos.getUserInfo(user)
            .then(function (response) {
                $scope.user.userinfo = gitdata.getGitUser(response.data);
            }, function (error) {
                $scope.status = 'Unable to load user info: ' + error.message;
                console.log(error.message);
            });
    };

    $scope.getUserRepos = function() {
        
        if ($scope.user.userinfo.username) {
            var userName = $scope.user.userinfo.username;
            repos.getUserRepos(userName)
            .then(function(response){
                $scope.loading = false;
                $scope.user.userrepos = gitdata.getGitUserRepos(response.data);
            }, function(error){
                $scope.repoStatus = 'Unable to load user repos: ' + error.message;
            });

        }
    };

    $scope.checkParam();

});