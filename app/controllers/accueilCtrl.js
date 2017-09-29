myApp.controller('accueilCtrl', function($scope, loginService) {
    
    $scope.deconexion = function(){
        console.log('deconexion');
    }

     loginService.getUserForAccueil().then(function(result){
        $scope.user = result.data;
        console.log($scope.user);

    })

});