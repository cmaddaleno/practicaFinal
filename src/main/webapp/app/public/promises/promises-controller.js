
var module = angular.module('mpApp.public');


module.controller('promisesController', function ($scope, $log, $http, helloService, comm, postResource) {
	
	  $scope.hello = "";
	  $scope.serverHello = "";
	  $scope.posts = [];

	  //  Promise chaining
	  $scope.testPromise = function() {
		  helloService.getHello()
	      .then(function(result) {
	        $scope.hello = result;
	        return $http.get(comm.url + '/hello');
	      })
	      .then(function(result) {
		        $scope.serverHello = result.data;
		        return postResource.queryAll({"max":100}).$promise;
		   })
		   .then(function(result) {
			   $scope.posts = result;
		   })
	      .catch(function(error) {
		    console.log("An error occured: " + error);
		  });
	  };
    
});
