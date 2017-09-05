var module = angular.module('mpApp.directives', []);


module.directive('mpDirective', function() {
    return {
    template: 'Nombre: {{item.name}} Home page: {{item.homepage}}'
    };
});

