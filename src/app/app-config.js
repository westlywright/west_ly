// Always remember to instantiate this bugger
angular.module('ngTemplates', []);

var mainApp = angular.module('256_bits',
    [
        'ui.router',
        'ngTemplates'
    ]
);

mainApp.config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'src/app/views/home.html'
        });
    }
]);