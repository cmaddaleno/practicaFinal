var module = angular.module('mpApp.filters', []);

module.filter('mirror', function reversal () {
    return function(item) {
        return item +'|'+item.split("").reverse().join("");
    }
  });

