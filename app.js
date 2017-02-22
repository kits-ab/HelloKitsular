angular.module('HelloKitsular', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('HelloKitsular').config(function($routeProvider) {

    $routeProvider.when('/page1',{templateUrl: 'partial/page1/page1.html'});
    $routeProvider.when('/page2',{templateUrl: 'partial/page2/page2.html'});
    $routeProvider.when('/page3',{templateUrl: 'partial/page3/page3.html'});
    $routeProvider.when('/page3/:id',{templateUrl: 'partial/page3/page3.html'});
    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/page1'});

});

angular.module('HelloKitsular').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
