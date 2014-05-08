var app = angular.module('AngularApp', ['ngRoute', 'ngResource']);

app.config(function ($routeProvider) {

    $routeProvider.when("/contact", {
        controller: "contactController",
        templateUrl: "/Scripts/app/views/contact.html"
    });

    $routeProvider.when("/about", {
        controller: "aboutController",
        templateUrl: "/Scripts/app/views/about.html"
    });

    $routeProvider.otherwise({ redirectTo: "/about" });
});

app.controller('aboutController', function ($scope, apiDataService) {

    apiDataService.Cities().then(function (cs) {
        $scope.cities = cs;
    });
});

app.controller('contactController', function ($scope) {

});

app.controller('navigationController', function ($scope, $location) {

    $scope.isActive = function (path) {

        return $location.path().substr(0, path.length) == path;
    };
});

app.factory('apiDataService', function($http) {

    var placesDataFactory = {};

    var _cities = function() {

        return $http.get("/Home/Cities").then(function(results) {
            return results.data;
        });
    };

    placesDataFactory.Cities = _cities;

    return placesDataFactory;
});
