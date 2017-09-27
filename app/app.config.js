myApp.config(['$routeProvider', function ($routeProvider) {
      $routeProvider.
        when('/', {
          controller: 'loginCtrl',
          templateUrl: 'views/login.html'
        }).
        when('/accueil', {
          controller: 'accueilCtrl',
          templateUrl: 'views/accueil.html'
        }).
        otherwise('/');
    }
  ]);



