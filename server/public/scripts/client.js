var quotes = [{
    sayer: 'Dr. Steven Strange',
    quote: 'I believe you will find your nose acceptably close to where it has always been. '
}, {
    sayer: 'Dr. Steven Strange',
    quote: 'There is no right or wrong in this debate. It is simply a matter of perspective, and it is not my place to influence the evolution of the superhuman role.'
}, {
    sayer: 'Sherlock Holmes',
    quote: 'London, that great cesspool into which all the loungers and idlers of the Empire are irresistibly drained. '
}, {
    sayer: 'Sherlock Holmes',
    quote: 'when you have eliminated the impossible, whatever remains, however improbable, must be the truth'
}, {
    sayer: 'Josiah Bartlet',
    quote: 'I\'m victim to my own purity of character. '
}, {
    sayer: 'Josiah Bartlet',
    quote: 'You know what you are? You\'re the Charlie Brown of missile defense. The Pentagon is Lucy. '
}];

console.log(quotes);

var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/home.html',
            controller: 'HomeController',
            controllerAs: 'home'
        })
        .when('/strange', {
            templateUrl: '/views/templates/strange.html',
            controller: 'StrangeController',
            controllerAs: 'strange'
        })
        .when('/bartlet', {
            templateUrl: '/views/templates/bartlet.html',
            controller: 'BartletController',
            controllerAs: 'bartlet'
        })
        .when('/sherlock', {
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
    shuffle(quotes);
    self.sayer = quotes[0].sayer;
    self.quote = quotes[0].quote;
    console.log(self.sayer);

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

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
