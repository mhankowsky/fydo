
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
        controller: 'TaskCtrl'
      }).
      when('/projects', {
        templateUrl: 'partials/projects.html',
        controller: 'ProjectCtrl'
      }).
      when('/projectsedit', {
        templateUrl: 'partials/projectsedit.html',
        controller: 'ProjectCtrl'
      }).
      when('/teams', {
        templateUrl: 'partials/teams.html',
        controller: 'TeamCtrl'
      }).
      when('/teamsedit', {
        templateUrl: 'partials/teamsedit.html',
        controller: 'TeamCtrl'
      }).
      when('/dashboard', {
        templateUrl: 'partials/dashboard.html',
        controller: 'TeamCtrl'
      }).
      when('/tasksassign', {
        templateUrl: 'partials/tasksassign.html',
        controller: 'TaskCtrl'
      }).
      otherwise({
        redirectTo: '/login'
      });
}]);

