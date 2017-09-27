myApp.controller('loginCtrl', function($scope,$location, loginService) {
   
  $scope.createUser = function(){
      if($scope.userForm.$valid === true){
        var userToPost = {
            'username' : $scope.username,
            'password' : $scope.password
        }
        
        loginService.postUser(userToPost).then(function(result){
            $scope.createUser = result.data;
        })
      }
  };

  $scope.login = function(){
      if($scope.userForm.$valid === true){
        var dataUser = {
            'username' : $scope.username,
            'password' : $scope.password
        }

        loginService.getUser(dataUser).then(function(result){
            $scope.login = result.data;
        })
      }
  };

});