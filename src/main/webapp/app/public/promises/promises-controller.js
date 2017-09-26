
var module = angular.module('mpApp.public');


module.controller('promisesController', function ($scope, $log, helloService) {
	
	  $scope.hello = "";

	  //  We have a function on the scope that can update the name.
	  $scope.testPromise = function() {
		  helloService.getHello()
	      .then(
	      /* success function */
	      function(result) {
	        $scope.hello = result;
	      },
	      /* error function */
	      function(result) {
	        $log.info("Failed to get the name, result is " + result); 
	      });
	  };
    
});
