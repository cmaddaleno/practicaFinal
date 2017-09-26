
var module = angular.module('mpApp.public');


module.controller('promisesController', function ($scope, $log, comm, $http) {
	
	$scope.testPromise = function(){
		var promise = $http.get(comm.url + '/hello');
		$log.info(promise);
		
		promise.then(
			    /* success */
			    function(response) {
			      $log.info("Data " + response.data);
			    },
			    /* failure */
			    function(error) {
			      $log.error("Error: " + error);
			  });
	}
    
});
