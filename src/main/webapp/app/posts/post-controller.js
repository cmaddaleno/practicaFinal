
var module = angular.module('mpApp.controllers');


module.controller('postController', function($scope, $log, $http) {
    
    $scope.save = function(){
        $log.warn('save');
        
    };
    
    $scope.cancel = function(){
        $log.warn('cancel');
    };

});