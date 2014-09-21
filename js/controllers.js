'use strict';

angular.module('casa.controllers', [])

.controller('ApplicationController', function($scope) {
    $scope.loggedIn = false;

    $rootScope.toggleLoggedIn = function() {
        $scope.loggedIn = !$scope.loggedIn;
        console.log($scope.loggedIn);
    }
})

.controller('FilterController', function($scope) {
    var states = [
      { text: 'Alaskan/Hawaiian Time Zone', children: [
        { id: 'AK', text: 'Alaska' },
        { id: 'HI', text: 'Hawaii' }
      ]},
      { text: 'Pacific Time Zone', children: [
        { id: 'CA', text: 'California' },
        { id: 'NV', text: 'Nevada' },
        { id: 'OR', text: 'Oregon' },
        { id: 'WA', text: 'Washington' }
      ]}
    ]

    $scope.multi2Value = [
        { id: 'CT', text: 'Connecticut' },
        { id: 'DE', text: 'Delaware' }];

    $scope.multi = {
        multiple: true,
        query: function (query) {
            query.callback({ results: states });
        },
        initSelection: function (element, callback) {
            var val = $(element).select2('val'),
              results = [];
            for (var i=0; i<val.length; i++) {
                results.push(findState(val[i]));
            }
            callback(results);
        }
    };
})

.controller('ModalLoginCtrl', function($scope, $modal, $log) {
    $scope.open = function (size) {
        var modalInstance = $modal.open({
            templateUrl: 'loginModal.html',
            controller: LoginModalInstance,
            size: size,
            resolve: {}
        })

        modalInstance.result.then(function () {
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        })
    }

    var LoginModalInstance = function ($rootScope, $scope, $http, $modalInstance) {
        $scope.login = {}

        $scope.submit = function () {
            var unencoded = $scope.login.email + ':' + $scope.login.password,
                encoded = btoa(unencoded)

            $http.post({
                url: "http://casa.tpcstld.me/api/authenticate",
                headers: {
                    "Authorization": "Basic " + encoded
                }
            }).success(function(data) {
                $rootScope.loggedIn = true;
                $modalInstance.close();
            })
        }

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        }
    }
})

.controller('ModalSignupCtrl', function($scope, $modal, $log) {
    $scope.open = function (size) {
        var modalInstance = $modal.open({
            templateUrl: 'signupModal.html',
            controller: SignupModalInstance,
            size: size,
            resolve: {
            }
        });

        modalInstance.result.then(function () {
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

    var SignupModalInstance = function ($scope, $http, $modalInstance) {
        $scope.signup = {}

        $scope.submit = function () {
            $http.post("http://casa.tpcstld.me/api/users", {
                name: $scope.signup.name,
                password: $scope.signup.password,
                email: $scope.signup.email
            }).success(function(data) {
                $rootScope.loggedIn = true;
                // console.log(data)
            })

            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    };
})
