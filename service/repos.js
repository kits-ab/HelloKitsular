angular.module('HelloKitsular').service('repos', ['$http', function (http){

	var urlBase = 'https://api.github.com/users/';
    
    this.getUserRepos = function (username){
        return http.get(urlBase + username  + "/repos");
    };

    this.getUserInfo = function (username){
        return http.get(urlBase + username);
    };

    this.getSomething = function(test){
        return test;
    };
}]);
