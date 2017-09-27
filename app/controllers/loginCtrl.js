myApp.controller('loginCtrl', function($scope, $location, loginService, LxNotificationService) {
   
  $scope.createUser = function(){
      if($scope.userForm.$valid === true){
        var userToPost = {
            'username' : document.getElementById('username').value,
            'password' : document.getElementById('password').value
        }
        loginService.postUser(userToPost).then(function(result){
            console.log(result);
            LxNotificationService.notify('Compte de ' + userToPost.username + ' crée', undefined, undefined, undefined, undefined, undefined, 2 * 2000);

        }).catch(function(result){
            console.log(result.data);
            LxNotificationService.notify('Username existant', undefined, undefined, undefined, undefined, undefined, 2 * 2000);

        })

      }
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