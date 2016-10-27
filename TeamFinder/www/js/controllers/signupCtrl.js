angular.module('starter').controller('SignupCtrl', function($scope, userService, $ionicHistory){

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



});
