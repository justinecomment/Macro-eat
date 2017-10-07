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
                var token = result.data;

                localStorage.setItem('token', token);
                $location.path('/accueil');
            }).catch(function(result){
                document.getElementById('error').innerHTML = "Mauvais Login/Mot de passe";
                $scope.userForm.$invalid = true;
            })
       }
    };



});