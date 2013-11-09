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
    auth.login('facebook', {scope:'email'});

  };
}

function DashCtrl($scope, angularFire){
  var ref = new Firebase("https://fydo.firebaseio.com/users/"+UserId);
  $scope.User = [];
  angularFire(ref, $scope, "User");
  
    $scope.activeTask = function(taskId){
    activeTask = taskId;
  }
 
}

function ProjectCtrl($scope, angularFire){
  var ref = new Firebase("https://fydo.firebaseio.com/users/"+UserId);
  $scope.User = [];
  angularFire(ref, $scope, "User");
  


  $scope.activeTask = function(taskId){
    activeTask = taskId;
  }
 
}


function TeamCtrl($scope, angularFire){
  var ref = new Firebase("https://fydo.firebaseio.com/users/"+UserId+"/teams");
  $scope.teams = [];
  angularFire(ref, $scope, "teams");

  $scope.state='read';


  
  $scope.changeActiveTeam = function(taskId){
      $scope.activeTeam = teamId;
  };




 
}

function TeamCtrl($scope, angularFire){
  var ref = new Firebase("https://fydo.firebaseio.com/users/"+UserId+"/teams");
  $scope.teams = [];
  angularFire(ref, $scope, "teams");

  
  $scope.changeActiveTeam = function(taskId){
      $scope.activeTeam = teamId;
  };




 
}
