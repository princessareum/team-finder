angular.module('app').controller('LoginCtrl', function($scope, userService){

  $scope.createUser = function(user){
    userService.createUser(user).then(function(response){
      $scope.newUser = response;
      alert("You are successfully signed up!");
    });
  };

  $scope.getUser = function(){
    userService.getUser().then(function(response){
      $scope.user = response;
    });
  };

  $scope.login = function(user){
    userService.login(user).then(function(response){
      if(response.login){
        userService.getUser(response.user._id).then(function(response){
          $scope.user = response;
        });
      };
    });
  };

});
