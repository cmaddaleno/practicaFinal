
var module = angular.module('mpApp.public');


module.controller('postController', function ($scope, $log, postResource) {

    var pc = this;

    pc.post = {};

    pc.save = function () {

        var successCallback = function(data, responseHeaders) {
            $log.info('saved successfuly ' + data);
        };

        var errorCallback = function(responseHeaders) {
            $log.error('error while persisting');
        };

         postResource.save($scope.admOrganization, successCallback, errorCallback);

    };


    pc.cancel = function () {
        pc.post = {};
    };


    //$scope.$watch('post.title', ...);
    $scope.$watch(function () {
        return pc.post.title;
    }, function (newValue, oldValue) {
        $log.info('changing post. Old value ' + oldValue + ' New value ' + newValue);
    });

});