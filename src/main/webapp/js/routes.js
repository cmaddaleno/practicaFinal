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
                templateUrl: 'app/public/posts/search.html',
                controller: 'searchPostController'
            })
            .when('/new-post', {
                templateUrl: 'app/public/posts/detail.html',
                controller: 'newPostController'
            })
            .otherwise({
                redirectTo: '/demo'
            });
});