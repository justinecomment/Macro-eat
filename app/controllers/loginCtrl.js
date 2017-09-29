myApp.controller('loginCtrl', function($scope, $location, loginService, LxNotificationService, $cookies) {
   
    $scope.createUser = function(){
        var userToPost = {
            'username' : document.getElementById('username').value,
            'password' : document.getElementById('password').value
        }
        loginService.postUser(userToPost).then(function(result){
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
            loginService.getUser(dataUser);
            LxNotificationService.notify('Bonjour ' + dataUser.username , undefined, undefined, undefined, undefined, undefined, 2 * 2000);
       }
    };



});