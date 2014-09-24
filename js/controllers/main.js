'use strict';

angular.module('casa.controllers')

.controller('ApplicationController', function($scope, $rootScope, $state  ) {
    $rootScope.toggleLoggedIn = function() {
        $rootScope.loggedIn = !$rootScope.loggedIn;
    }
})