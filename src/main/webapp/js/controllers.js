/**
 * Module setter
 * @type type
 */
angular.module('mpApp.controllers', 
['mpApp.services',
'mpApp.providers',
'mpApp.directives'])
.controller('demoDirectivesController', function($scope) {
    $scope.staticjvmlanguages = [
        {name:'Java', homepage: 'https://go.java', birthday: new Date(1995, 05, 23, 01, 01, 01),
            logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/419px-Java_programming_language_logo.svg.png' },
        {name:'Kotlin', homepage: 'https://kotlinlang.org/', birthday: new Date(2011, 05, 23, 01, 01, 01),
            logo: 'https://kotlinlang.org/assets/images/open-graph/kotlin_250x250.png' },
        {name:'Ceylon', homepage: 'https://ceylon-lang.org/', birthday: new Date(2011, 05, 23, 01, 01, 01),
            logo: '' },
        {name:'Clojure', homepage: 'https://clojure.org/', birthday: new Date(2007, 05, 23, 01, 01, 01),
            logo: '' },
        {name:'Scala', homepage: 'https://www.scala-lang.org/', birthday: new Date(2004, 01, 20, 01, 01, 01),
            logo: '' }];
        
    $scope.dynamicjvmlanguages = ['JRuby', 'Groovy', 'Jyton', 'Mirah', 'JavaScript'];

    $scope.favoritelang = 'Java';
    
    $scope.static = true;
})
.controller('demoController', function($scope) {
    
    $scope.dev =    {};

    $scope.setModel = function(){
        $scope.dev = {
            name: 'Victor Orozco',
            email: 'vorozco@nabenik.com'
        };
    };
})
.controller('norrisController', function($scope, $log, $http) {
    
    $scope.getNorris = function(){
        $scope.norrisFacts = [];
        
        var url="https://api.chucknorris.io/jokes/search?query="+$scope.search;
        
        $http({method:'GET',
            url:url})
                .then(function success(response){
                    $scope.norrisFacts = response.data.result;
                    $log.warn("Facts encontrados" + response.data.total);
            
                }, function error(response){
                    $scope.norrisFacts = [];
                });
         
        $scope.dev = {};
    };

})
.controller('greetController', function($scope, $log, helloService, rageService, alternativeGreetService, game) {
    
    $scope.doGreet = function(){
        $log.warn('Buen saludo' + helloService.sayHello($scope.demoName));
        $log.error('Mal saludo' + rageService.sayHello($scope.demoName));
        
        $log.warn('Buena despedida' + helloService.sayGoodBye($scope.demoName));
        $log.error('Mala despedida' + rageService.sayGoodBye($scope.demoName));
    };
    
    $scope.doGreet2 = function(){
        $log.warn('Buen saludo' + alternativeGreetService.sayHello('Hola alternativo'));
        $log.info(game.phrase);
        $log.info(game.compare('JavaScript'));
    };

})
;

var module = angular.module('mpApp.controllers');

module.controller('dummyController', function($log, dummyService) {
    
    this.doDummyFunction = function(){
        $log.warn(dummyService.doDummy());
    };

});

module.value('Country', 'Guatemala');