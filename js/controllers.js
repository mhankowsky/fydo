var fydoControllers = angular.module("fydoControllers", ["firebase"]);

var UserId;

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

function LoginCtrl($scope, $location, angularFire) {

  var ref = new Firebase("https://fydo.firebaseio.com/users");
  $scope.usr = [];
  angularFire(ref, $scope, "usr");
  
  var auth = new FirebaseSimpleLogin(ref, function(error, user) {
      if (error) {
        // an error occurred while attempting login
        console.log(error);
      } else if (user) {
        // user authenticated with Firebase
        UserId = user.id;
        var userRef = ref.child(user.id);
        userRef.on('value', function(snapshot) {
          if(snapshot.val() === null) {
            userRef.child('name').set(user.thirdPartyUserData.name);
            userRef.child('email').set(user.thirdPartyUserData.email);
            userRef.child('teams').set([]);
          }
        });

       $location.path("/home"); 
      } else {
        // user is logged out
      }
  });

  $scope.facebookLogin = function(){
    console.log("Running auth");
    auth.login('facebook', {scope:'email'});

  };
    

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
