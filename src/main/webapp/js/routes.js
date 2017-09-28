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
            .when('/autos', {
                templateUrl: 'app/public/automovil/search.html',
                controller: 'searchAutoController'
            })
            .when('/new-post', {
                templateUrl: 'app/public/posts/detail.html',
                controller: 'newPostController'
            })
            .when('/new-auto', {
                templateUrl: 'app/public/automovil/detail.html',
                controller: 'newAutoController'
            })
            .when('/update-post/:id', {
                templateUrl: 'app/public/posts/detail.html',
                controller: 'editPostController'
            })
            .otherwise({
                redirectTo: '/demo'
            });
});