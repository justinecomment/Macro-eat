myApp.service('loginService', function($http, $location){
    const baseUrl = 'http://localhost/macroeat';
   

    this.postUser = function(userToPost){
        return $http.post(baseUrl + '/login.php?registerUsername=' + userToPost.username + "&password=" + userToPost.password, userToPost )
            .success(function(data, status, headers, config) {
                return result.data;
            })
            .error(function(data, status, headers, config) {
                return data;
            });

    };


 

    this.getUser = function(dataUser){
         return $http.get(baseUrl + '/login.php?loginUsername=' + dataUser.username + "&password=" + dataUser.password ).success(function(result){
            document.getElementById("success").innerHTML = "Bienvenue " + result;
            $location.path('/accueil');
             return result;
        }).error(function(data){
           document.getElementById("error").innerHTML = "Mauvais Login/Mot de passe. Veuillez recommencer.";
         });
    };

});