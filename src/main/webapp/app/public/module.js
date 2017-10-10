
var module = angular.module('mpApp.public', ['mpApp.ui','ui.router','ngResource']);

module.constant('comm',{
    url : '/demo/rest'
});

module.config(function($urlRouterProvider, $stateProvider){
	$urlRouterProvider.otherwise('/')
	$stateProvider.state('demo',{
        url: '/',
        data:{
            title: 'Demo'
        },
        views:{
            "root@app":{
            	controller : 'demoController',
                templateUrl: 'app/public/demo/demo.html'
            }
        }
    });
	
	$stateProvider.state('demoDirectives',{
        url: '/demo-directives',
        data:{
            title: 'Demo Directives'
        },
        views:{
            "root@app":{
            	controller : 'demoDirectivesController',
                templateUrl: 'app/public/demo-directives/demo-directives.html'
            }
        }
    });
    
});

//
//module.config(function($routeProvider, $locationProvider){
//    $locationProvider.hashPrefix();
//    $routeProvider
//    .when('/posts', {
//        templateUrl: 'app/public/posts/search.html',
//        controller: 'searchPostController'
//    })
//    .when('/new-post', {
//        templateUrl: 'app/public/posts/detail.html',
//        controller: 'newPostController'
//    })
//    .when('/update-post/:id', {
//        templateUrl: 'app/public/posts/detail.html',
//        controller: 'editPostController'
//    })
//    .when('/promises', {
//        templateUrl: 'app/public/promises/detail.html',
//        controller: 'promisesController'
//    }).when('/demo', {
//        templateUrl: 'app/public/demo/demo.html',
//        controller: 'demoController'
//    })
//    .when('/demo-directives', {
//        templateUrl: 'app/public/demo-directives/demo-directives.html',
//        controller: 'demoDirectivesController'
//    });
//});
