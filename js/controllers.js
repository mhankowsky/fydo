var fydoControllers = angular.module("fydoControllers", ["firebase"]);

var accessToken;

function homeController($scope, angularFire) {

   var ref = new Firebase("https://fydo.firebaseio.com/");
   //var ref = new Firebase("https://ou3whyvi016.firebaseio-demo.com/");
   $scope.messages = [];
   angularFire(ref, $scope, "messages");
   $scope.addMessage = function(e) {
     if (e.keyCode != 13) return;
     $scope.messages.push({from: $scope.name, body: $scope.msg});
     $scope.msg = "";
   };

}

function LoginCtrl() {

}


function signinCallback(authResult) {

  console.log(authResult);
      if (authResult['access_token']) {
          // User successfully authorized the G+ App!
          accessToken = authResult['access_token'];
          
      } else if (authResult['error']) {
         // User has not authorized the G+ App!
      }
} 
