myApp.service('loginService', function($http, $location){
    const baseUrl = 'http://localhost/macroeat';
    var userSaved = null;

    this.saveUser = function(user){
        return userSaved = user;
    };

    this.getUserSaved = function(){
        return userSaved;
    }


    this.createUser = function(userToPost){
        return $http.post(baseUrl + '/login.php?registerUsername=' + userToPost.username + "&password=" + userToPost.password, userToPost )
            .success(function(result) {
                return result.data;
            })
            .error(function(result) {
                return result.data;
            });
    };


    this.loginUser = function(dataUser){
         return $http.get(baseUrl + '/login.php?username=' + dataUser.username + "&password=" + dataUser.password)
            .success(function(result){
                return result.data;
            }).error(function(result){
                return result.data;
            });
    };


});