myApp.config(['$routeProvider', function ($routeProvider) {
      $routeProvider.
        when('/', {
          controller: 'accueilCtrl',
          templateUrl: 'views/accueil.html'
        }).
        otherwise('/');
    }
  ]);



