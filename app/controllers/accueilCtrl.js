myApp.controller('accueilCtrl', function($scope, loginService, $location, LxNotificationService) {
    
    var token = localStorage.getItem('token');
    $scope.currentUser = loginService.getUserSaved();

    $scope.deconexion = function(){

        LxNotificationService.confirm('','Etes vous sur de vouloir vous déconnecter?',
            {
                cancel: 'Cancel',
                ok: 'Deconnexion'
            }, function(cancel)
            {
                if (cancel)
                {
                     localStorage.removeItem('token');
                    if(localStorage.getItem('token')){
                        return;
                    }
                    else{
                        $location.path('/login');
                    }
                }
                else
                {
                   
                    $location.path('/accueil');
                }
            });





        
    };



});