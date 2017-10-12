
var module = angular.module('mpApp.public', ['mpApp.ui', 'ui.router', 'ngResource']);

module.constant('comm', {
    url: '/javademo/rest'
});

module.config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/')
    $stateProvider.state('public', {
        abstract: true,
        data: {
            title: 'MP Enterprise'
        }
    });

    $stateProvider.state('public.demo', {
        url: '/',
        data: {
            title: 'Demo'
        },
        views: {
            "root@app": {
                controller: 'demoController',
                templateUrl: 'app/public/demo/demo.html'
            }
        }
    });

    $stateProvider.state('public.demoDirectives', {
        url: '/demo-directives',
        data: {
            title: 'Demo Directives'
        },
        views: {
            "root@app": {
                controller: 'demoDirectivesController',
                templateUrl: 'app/public/demo-directives/demo-directives.html'
            }
        },
        resolve: {
            loadMyCtrl: function ($ocLazyLoad) {
                return $ocLazyLoad.load('app/public/demo-directives/demo-directives-controller.js');
            }
        }
    });

    $stateProvider.state('public.promises', {
        url: '/promises',
        data: {
            title: 'Promises'
        },
        views: {
            "root@app": {
                controller: 'promisesController',
                templateUrl: 'app/public/promises/detail.html'
            }
        }
    });

    $stateProvider.state('public.posts', {
        url: '/posts',
        data: {
            title: 'Posts'
        },
        resolve: {
            searchPostFiles: function ($ocLazyLoad) {
                return $ocLazyLoad.load(['app/public/posts/post-resource.js',
                    'app/public/posts/post-controller.js']);
            }
        },
        views: {
            "root@app": {
                templateUrl: 'app/public/posts/search.html',
                controller: 'searchPostController'
            }
        }
    });

    $stateProvider.state('public.posts.edit', {
        url: '/update/:id',
        views: {
            "root@app": {
                templateUrl: 'app/public/posts/detail.html',
                controller: 'editPostController'
            }
        }

    });

    $stateProvider.state('public.posts.new', {
        url: '/new',
        views: {
            "root@app": {
                templateUrl: 'app/public/posts/detail.html',
                controller: 'newPostController'
            }
        }

    });

    $stateProvider.state('public.vehicle', {
        url: '/autos',
        data: {
            title: 'Vehicle'
        },
        views: {
            "root@app": {
                controller: 'searchAutoController',
                templateUrl: 'app/public/automovil/search.html'
            }
        }
    });
    
    $stateProvider.state('public.vehicle.new', {
        url: '/new-auto',
        views: {
            "root@app": {
                templateUrl: 'app/public/automovil/detail.html',
                controller: 'newAutoController'
            }
        }

    });
    
    $stateProvider.state('public.vehicle.edit', {
        url: '/update-vehicle/:id',
        views: {
            "root@app": {
                templateUrl: 'app/public/automovil/detail.html',
                controller: 'editAutoController'
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
