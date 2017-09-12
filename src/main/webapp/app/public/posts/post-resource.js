var module = angular.module('mpApp.public');


module.factory('postResource', function ($resource) {
    return $resource('https://jsonplaceholder.typicode.com/posts/:id', {
            id : '@id'
        }, {
        'queryAll': {
            method: 'GET',
            isArray: true
        }
//        'query' : {
//                method : 'GET',
//                isArray : false
//        },
//        'update' : {
//            method : 'PUT'
//        },
//        'persistImage' : {
//            method : 'POST',
//            url: 'rest/protected/organizations/persist-image'
//        }
    });
});

