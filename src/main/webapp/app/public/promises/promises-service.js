
var module = angular.module('mpApp.public');


module.factory('promiseService', function($http, $q) {

  return function() {

	this.hello = null;
	  
    this.getName = function() {
      return $http.get(comm.url + '/hello');
    };
  }
  
});