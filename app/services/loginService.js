myApp.service('loginService', function($http, $location){
    const baseUrl = 'http://localhost/macroeat';
   

    this.postUser = function(userToPost){
        return $http.post(baseUrl + '/login.php?registerUsername=' + userToPost.username + "&password=" + userToPost.password, userToPost )
            .success(function(result) {
                document.getElementById("success").innerHTML = "Bienvenue " + result;
                return result.data;
            })
            .error(function(result) {
                return result.data;
            });
    };


    this.getUser = function(dataUser){
         return $http.get(baseUrl + '/login.php?loginUsername=' + dataUser.username + "&password=" + dataUser.password ).success(function(result){
            document.getElementById("success").innerHTML = "Bonjour " + result;
            $location.path('/accueil');
             return result;
        }).error(function(data){
           document.getElementById("error").innerHTML = "Mauvais Login/Mot de passe. Veuillez recommencer.";
         });
    };

});