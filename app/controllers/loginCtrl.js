myApp.controller('loginCtrl', function($scope, $location, loginService, LxNotificationService, $route) {
   
    $scope.createUser = function(){
        var userToPost = {
            'username' : document.getElementById('username').value,
            'password' : document.getElementById('password').value
        }
        loginService.createUser(userToPost).then(function(result){
            LxNotificationService.success('Compte de ' + userToPost.username + ' crée');
            $location.path('/accueil');

        }).catch(function(result){
                $scope.userForm.$invalid = true;
        })
    };

    $scope.login = function(){
        if($scope.userForm.$valid === true){
            var dataUser = {
                'username' : document.getElementById('username').value,
                'password' :document.getElementById('password').value
            }
            loginService.loginUser(dataUser).then(function(result){
                LxNotificationService.notify('Bonjour ' + dataUser.username , undefined, undefined, undefined, undefined, undefined, 2 * 2000);
                loginService.saveUser(dataUser.username);
                $location.path('/accueil');
                $route.reload();
            }).catch(function(result){
                document.getElementById('error').innerHTML = "Mauvais Login/Mot de passe";
                $scope.userForm.$invalid = true;
                
            })
       }
    };



});