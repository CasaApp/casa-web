'use strict';

angular.module('casa.controllers', [])

.controller('ApplicationController', function($scope) {
    $scope.loggedIn = false;

    $scope.toggleLoggedIn = function() {
        $scope.loggedIn = !$scope.loggedIn;
        console.log($scope.loggedIn);
    }
})
.controller('ListingsController', function($scope) {
    $scope.listings = [
        {
            "address": "49 Columbia St. W",
            "city": "Waterloo, ON"
        },
        {
            "address": "49 Columbia St. W",
            "city": "Waterloo, ON"
        },
        {
            "address": "49 Columbia St. W",
            "city": "Waterloo, ON"
        },
        {
            "address": "49 Columbia St. W",
            "city": "Waterloo, ON"
        },
        {
            "address": "49 Columbia St. W",
            "city": "Waterloo, ON"
        }
    ]
})