angular.module('directives', [])
    .directive('scrollWatch', ['$window', function($window) {
            function link(scope, element, attrs) {
                angular.element($window).scroll( function(){
                    console.log('test');
                });
            };
            return {
                link: link
            };
        }]
    );
