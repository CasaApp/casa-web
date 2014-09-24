'use strict';

angular.module('casa.controllers')

.controller('ListingsController', function($scope, $rootScope, $http, $modal, $log) {
    $scope.isBookmarksListShowing = false;

    $scope.filter = {
        sort_order: 0,
        distance: 10,
        start_date: "2014-09-06",
        end_date: "2014-12-19",
        max_price: 1000,
        rooms: 1
    };
})
