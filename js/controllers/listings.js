'use strict';

angular.module('casa.controllers')

.controller('ListingsController', function($scope, $rootScope, $http, $modal, $log) {
    $scope.isBookmarksListShowing = false;

    $scope.showBookmarksList = function() {
        if ($rootScope.loggedIn)
            $scope.isBookmarksListShowing = true;
        else
            var modalInstance = $modal.open({
                templateUrl: 'loginModal.html',
                controller: LoginModalInstance,
                size: 'md',
                resolve: {}
            })

            modalInstance.result.then(function () {
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            })

            var LoginModalInstance = function ($rootScope, $scope, $http, $modalInstance) {
                $scope.login = {}

                $scope.submit = function () {
                    $rootScope.loggedIn = true;
                    $modalInstance.close();
                }
            }
    }

    $scope.filter = {
        sort_order: 0,
        distance: 10,
        start_date: "2014-09-06",
        end_date: "2014-12-19",
        max_price: 1000,
        rooms: 1
    };
})
