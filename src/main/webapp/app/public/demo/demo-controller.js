
var module = angular.module('mpApp.public');


module.controller('demoController', function($scope) {
    
    $scope.dev =    {};

    $scope.setModel = function(){
        $scope.dev = {
            name: 'Victor Orozco',
            email: 'vorozco@nabenik.com'
        };
    };
});