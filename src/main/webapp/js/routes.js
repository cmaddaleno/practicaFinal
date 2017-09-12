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
            .when('/posts', {
                templateUrl: 'app/public/posts/detail.html',
                controller: 'postController'
            })
            
            .otherwise({
                redirectTo: '/demo'
            });
});