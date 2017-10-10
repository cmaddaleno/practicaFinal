/**
 * Main module setter
 * @type angular app
 */
var module = angular.module('mpApp', [
//  'mpApp.services',
//  'mpApp.providers',
  'mpApp.public',
  'mpApp.ui',
  'ngRoute',
  'ngResource'
]);


module.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix();
	$routeProvider

	.otherwise({
		redirectTo : '/demo'
	});
});