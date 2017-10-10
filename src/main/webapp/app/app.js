/**
 * Main module setter
 * @type angular app
 */
var module = angular.module('mpApp', [
  'mpApp.public',
  'mpApp.ui',
  'ngResource',
  'ui.router'
]);


module.config(function($locationProvider, $stateProvider) {
	$locationProvider.hashPrefix();
	

//	$routeProvider
//
//	.otherwise({
//		redirectTo : '/demo'
//	});
});