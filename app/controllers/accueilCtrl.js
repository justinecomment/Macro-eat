myApp.controller('accueilCtrl', function($scope, loginService) {
    
    $scope.deconexion = function(){
        console.log('deconexion');
        localStorage.removeItem('token');
    };

});