angular.module('starter').service('userService', function($http){


  this.createUser = function(user){
    return $http({
      method: 'POST',
      url: '/auth',
      data: user
    }).then(function(response){
      return response.data;
    })
  };

  this.login = function(user){
    return $http({
      method: 'POST',
      url: '/auth',
      data: user
    }).then(function(response){
      return response.data;
    })
  };

  this.logout = function(){
    return $http({
      method: 'GET',
      url: '/api/user/logout'
    }).then(function(response){
      return response.data;
    })
  };

  this.getUser = function(userId){
    return $http({
      method: 'GET',
      url: '/api/user/?_id='+userId
    }).then(function(response){
      return response.data;
    })
  };

  this.updateUser = function(userId, user){
    return $http({
      method: 'PUT',
      url: '/api/user/'+userId,
      data: user
    }).then(function(response){
      return response.data;
    })
  };

  this.deleteUser = function(userId){
    return $http({
      method: 'DELETE',
      url: '/api/user/'+userId
    }).then(function(response){
      return response.data;
    })
  };


});
