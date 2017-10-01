myApp.controller('accueilCtrl', function($scope, loginService) {
    
    var myUser = loginService.getUserSaved();

    $scope.deconexion = function(){
        console.log('deconexion');
    };

    loginService.getUserForAccueil(myUser).then(function(result){
        $scope.user = result.data;
    });

});