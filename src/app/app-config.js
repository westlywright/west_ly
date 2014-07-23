// Always remember to instantiate this bugger
angular.module('ngTemplates', []);

var mainApp = angular.module('256_bits',
    [
        'ui.router',
        'ngTemplates',
        'directives'
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

        // Utilities functions below
        // Easter Egg
        function isInspectOpen()
        {
            console.profile();
            console.profileEnd();
            if (console.clear) console.clear();
            console.log('Whoa, Whoa, Whoa. Me thinks you\'re a developer or someone who wants to see some of my code. You chould click the link for Github up there (don\'t worry, this project is hosted there as well). Better yet...if you\'d like to talk email me westly.wright@gmail.com or call me at (928)458-5429.');
            return;
        }
        isInspectOpen();
    }
]);
