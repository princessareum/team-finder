angular.module('starter').controller('LoginCtrl', function($scope, userService, $state, $ionicHistory){

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
