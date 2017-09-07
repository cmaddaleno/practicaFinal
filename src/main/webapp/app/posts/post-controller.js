
var module = angular.module('mpApp.controllers');


module.controller('postController', function($scope, $log, $http) {
    
    this.save = function(){
        $log.warn('save');
        
    };
    
    this.cancel = function(){
        $log.warn('cancel');
    };
    
    this.post = {};

});