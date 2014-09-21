'use strict';

angular.module('casa.controllers')

.controller('SubletController', function($scope, $rootScope, $http, $stateParams) {
    if ($stateParams.subletId) {
        var id = $stateParams.subletId;

        angular.forEach($rootScope.listings, function(sublet, key) {
            if (id == sublet.id) $scope.sublet = sublet;
        });
    }
})