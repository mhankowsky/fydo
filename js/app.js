var app = angular.module("fydo", ["firebase"]);

function MyController($scope, angularFire) {

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
