var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
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

app.controller('StrangeController', function() {
  console.log('strange controller running');
  var self = this;
  self.message = "Strange controller is the best!";
  self.showText = false;

});

app.controller('SherlockController', function() {
  console.log('sherlock controller running');
  var self = this;
  self.message = "Sherlock controller is the best!";
  self.showText = false;

});

app.controller('BartletController', function() {
  console.log('Bartlet controller running');
  var self = this;
  self.message = "Bartlet controller is the best!";
  self.showText = false;

});
