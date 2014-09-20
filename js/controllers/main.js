'use strict';

angular.module('casa.controllers')

.controller('ApplicationController', function($scope, $rootScope, $state  ) {
    $rootScope.loggedIn = false;

    $rootScope.toggleLoggedIn = function() {
        $rootScope.loggedIn = !$rootScope.loggedIn;
        $state.go('listings')
    }
})



.controller('ModalDemoCtrl', function($scope, $modal, $log) {

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: ModalInstanceCtrl,
      size: "md",
      resolve: {}
    });

    modalInstance.result.then(function () {
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  // Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

var ModalInstanceCtrl = function ($scope, $modalInstance) {

  $scope.login = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};
})