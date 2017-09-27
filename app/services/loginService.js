myApp.service('loginService', function($http){
    const baseUrl = 'http://localhost/macroeat';
   

    this.postUser = function(userToPost){
        return $http({ 
            method: 'POST', 
            url: baseUrl + '/login.php?register=', 
            dataType: 'json', 
            data: userToPost,
            headers: {
            'Content-Type': 'application/json'
            }
        });
    };

    this.getUser = function(dataUser){
         return $http.get(baseUrl + '/login.php?username=' + dataUser.username + "&password=" + dataUser.password ).success(function(result){
            document.getElementById("success").innerHTML = "Bienvenue " + result;
             return result;
        }).error(function(data){
           document.getElementById("error").innerHTML = "Mauvais Login/Mot de passe. Veuillez recommencer.";
         });
    };





});