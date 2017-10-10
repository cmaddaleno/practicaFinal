
var module = angular.module('mpApp.public', ['mpApp.ui','ngRoute','ngResource']);

module.constant('comm',{
    url : '/demo/rest'
});

module.config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix();
    $routeProvider
    .when('/posts', {
        templateUrl: 'app/public/posts/search.html',
        controller: 'searchPostController'
    })
    .when('/new-post', {
        templateUrl: 'app/public/posts/detail.html',
        controller: 'newPostController'
    })
    .when('/update-post/:id', {
        templateUrl: 'app/public/posts/detail.html',
        controller: 'editPostController'
    })
    .when('/promises', {
        templateUrl: 'app/public/promises/detail.html',
        controller: 'promisesController'
    }).when('/demo', {
        templateUrl: 'app/public/demo/demo.html',
        controller: 'demoController'
    })
    .when('/demo-directives', {
        templateUrl: 'app/public/demo-directives/demo-directives.html',
        controller: 'demoDirectivesController'
    });
});
