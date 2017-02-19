var myApp = angular.module('myApp', ['ui.router', 'ngAnimate']);

myApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home') 

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: './home.html',
      controller: 'myController'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: './contact.html',
      controller: 'ContactController'
    })
    .state('submitSuccess', {
      url: '/submitSuccess',
      templateUrl: './submitSuccess.html',
      controller: 'ContactController'
    })
    .state('directory', {
      url: '/directory',
      templateUrl: './directory.html',
      controller: 'myController'
    })
}]);




myApp.directive('randomMates', [function($interval) {

  return {
    restict: 'E',
    scope: {
      friends: '=',
      title: '='
    },
    templateUrl: './random.html',
    transclude: true,
    replace: true,
    controller: function($scope, $interval) {
      $scope.random = Math.floor(Math.random() * 4);
    }
  };

}]);
