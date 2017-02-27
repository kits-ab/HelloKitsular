angular.module('HelloKitsular').service('gitdata', [function (){
    
    var mapUserData = function(data){
        var gitUser = {};
        gitUser.username = data.login;
        gitUser.id = data.id;
        gitUser.gravatar_id = data.avatar_url;
        gitUser.repos_url = data.repos_url;
        
        return gitUser;
    };

    var mapUserRepo = function(data){
        var gitRepo = {};
        gitRepo.name = data.name;
        gitRepo.repo_url = data.html_url;
        gitRepo.pushed = data.pushed_at;
        gitRepo.created = data.created_at;
        gitRepo.updated = data.updated_at;

        return gitRepo;
    };

    this.getGitUser = function(data){
        return mapUserData(data);
    };

    this.getGitUserRepos = function(data){

        var userRepos = [];
        for (var i = 0; i < data.length; i++) {
            
            userRepos.push(mapUserRepo(data[i]));
        }
        return userRepos;
    };


}]);
