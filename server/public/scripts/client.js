var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/potato' ,{
      templateUrl: '/views/templates/potato.html',
      controller: 'PotatoController',
      controllerAs: 'potato'
    })
    .when('/strange' ,{
      templateUrl: '/views/templates/strange.html',
      controller: 'StrangeController',
      controllerAs: 'strange'
    })
    .when('/bartlet' ,{
      templateUrl: '/views/templates/bartlet.html',
      controller: 'BartletController',
      controllerAs: 'bartlet'
    })
    .when('/sherlock' ,{
      templateUrl: '/views/templates/sherlock.html',
      controller: 'SherlockController',
      controllerAs: 'sherlock'
    })
    .otherwise({
      redirectTo: 'home'
    });

}]);

app.controller('HomeController', function() {
  console.log('home controller running');
  var self = this;
  self.message = "Home controller is the best!";

});

app.controller('PotatoController', function() {
  console.log('potato controller running');
  var self = this;
  self.message = "Potato controller is the best!";

});
