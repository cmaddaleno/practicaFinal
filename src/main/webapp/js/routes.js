var module = angular.module('mpApp');


module.config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix();
    $routeProvider
            .when('/demo', {
                templateUrl: 'view/demo.html',
                controller: 'demoController'
            })
            .when('/demo-directives', {
                templateUrl: 'view/demo-directives.html',
                controller: 'demoDirectivesController'
            })
            .otherwise({
                redirectTo: '/demo'
            });
});