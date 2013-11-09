
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
      when('/tasksedit', {
        templateUrl: 'partials/tasksedit.html',
        controller: 'TaskEdit'
      }).
      when('/projects', {
        templateUrl: 'partials/projects.html',
        controller: 'ProjectCtrl'
      }).
      when('/projectsedit', {
        templateUrl: 'partials/projectsedit.html',
        controller: 'ProjectEdit'
      }).
      when('/teams', {
        templateUrl: 'partials/teams.html',
        controller: 'TeamCtrl'
      }).
      when('/teamsedit', {
        templateUrl: 'partials/teamsedit.html',
        controller: 'TeamEdit'
      }).
      otherwise({
        redirectTo: '/login'
      });
}]);

