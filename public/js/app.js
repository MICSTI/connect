var connect = angular.module("connect", []);

connect.controller("AppCtrl", function($scope) {
    // app config
    $scope.app = {
        config: {
            title: "Connect",
            author: "Michael Stifter"
        }
    };
});