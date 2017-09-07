
var module = angular.module('mpApp.controllers');


module.controller('postController', function($scope, $log) {
    
    var pc = this;
    
    pc.save = function(){
        $log.warn('save');
        
    };
    
    pc.cancel = function(){
        $log.warn('cancel');
    };
    
    pc.post = {'title':""};
    pc.time = new Date();

    //$scope.$watch('post.title', ...);
    $scope.$watch(function() { return pc.post.title; }, function(newValue, oldValue) {
        $log.info('changing post. Old value ' + oldValue + ' New value ' + newValue);
    });
    


});