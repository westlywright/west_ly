angular.module('directives', [])
    .directive('sideNav', ['$window', function($window) {
            function link(scope, element, attrs) {
                angular.element($window).scroll( function() {

                    angular.element('#side-nav-cog').addClass('fa-spin');

                    clearTimeout( $.data( this, 'scrollWatch' ) );

                    $.data( this, 'scrollWatch', setTimeout(function() {
                        angular.element('#side-nav-cog').removeClass('fa-spin');
                    }, 250) );

                });

            };
            return {
                restrict: 'E',
                templateUrl: 'src/app/directives/side-nav-template.html',
                link: link
            };
        }]
    );