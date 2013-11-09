
var fydoApp = angular.module('fydo', [
      'ngRoute',
      'fydoControllers',
      'firebase'
]);

fydoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
      }).
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).
      when('/tasks', {
        templateUrl: 'partials/tasks.html',
        controller: 'TaskCtrl'
      }).
      otherwise({
        redirectTo: '/login'
      });
}]);

