!function(exports, global) {
    global["true"] = exports, angular.module("ngTemplates", []);
    var mainApp = angular.module("256_bits", [ "ui.router", "ngTemplates", "directives" ]);
    mainApp.config([ "$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/"), $stateProvider.state("home", {
            url: "/",
            templateUrl: "src/app/views/home.html"
        }).state("cv", {
            url: "/cv",
            templateUrl: "src/app/views/cv.html"
        });
    } ]), angular.module("directives", []).directive("scrollWatch", [ "$window", function($window) {
        function link() {
            angular.element($window).scroll(function() {
                console.log("test");
            });
        }
        return {
            link: link
        };
    } ]), angular.module("directives").directive("sideNav", [ "$window", function($window) {
        function link() {
            angular.element($window).scroll(function() {
                angular.element("#side-nav-cog").addClass("fa-spin"), clearTimeout($.data(this, "scrollWatch")), 
                $.data(this, "scrollWatch", setTimeout(function() {
                    angular.element("#side-nav-cog").removeClass("fa-spin");
                }, 250));
            });
        }
        return {
            restrict: "E",
            templateUrl: "src/app/directives/side-nav-template.html",
            link: link
        };
    } ]);
}({}, function() {
    return this;
}());