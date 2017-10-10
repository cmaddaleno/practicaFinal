
var module = angular.module('mpApp.public', ['mpApp.ui','ui.router','ngResource']);

module.constant('comm',{
    url : '/demo/rest'
});

module.config(function($urlRouterProvider, $stateProvider){
	$urlRouterProvider.otherwise('/')
	$stateProvider.state('public', {
            abstract : true,
            data : {
                title : 'MP Enterprise'
            }
        });
	
	$stateProvider.state('public.demo',{
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
	
	$stateProvider.state('public.demoDirectives',{
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
	
	$stateProvider.state('public.posts', {
        url : '/posts',
        data : {
            title : 'Posts'
        },
        views : {
            "root@app" : {
                templateUrl : 'app/public/posts/search.html',
                controller : 'searchPostController'
            }
        }
    });
	
	$stateProvider.state('public.posts.edit', {
        url : '/update/:id',
        views : {
            "root@app" : {
                templateUrl : 'app/public/posts/detail.html',
                controller : 'editPostController'
            }
        }
    
	});
	
	$stateProvider.state('public.posts.new', {
        url : '/new',
        views : {
            "root@app" : {
                templateUrl : 'app/public/posts/detail.html',
                controller : 'newPostController'
            }
        }
    
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
});
