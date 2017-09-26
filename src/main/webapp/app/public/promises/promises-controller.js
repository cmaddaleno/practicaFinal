
var module = angular.module('mpApp.public');


module.controller('promisesController', function ($scope, $log, $http, $q, helloService, comm, postResource) {
	
	  $scope.hello = "";
	  $scope.serverHello = "";
	  $scope.posts = [];

	  //  Promise chaining
	  $scope.testPromise = function() {
//		  helloService.getHello()
//	      .then(function(result) {
//	        $scope.hello = result;
//	        return $http.get(comm.url + '/hello');
//	      })
//	      .then(function(result) {
//		        $scope.serverHello = result.data;
//		        return ;
//		   })
//		   .then(function(result) {
//			   $scope.posts = result;
//		   })
//	      .catch(function(error) {
//		    console.log("An error occured: " + error);
//		  });
		  
		  var allPromise = $q.all([  
			  	helloService.getHello(),
			  	$http.get(comm.url + '/hello'),
			  	postResource.queryAll({"max":100}).$promise
			]);

			allPromise.then(function(values) {  
			    $scope.hello = values[0];
			    $scope.serverHello = values[1].data;
			    $scope.posts = values[2];
			    $log.info('promises done');
			});
	  };
    
});
