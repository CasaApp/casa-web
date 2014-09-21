'use strict';

angular.module('casa.controllers', [])

.controller('ApplicationController', function($scope) {
    $scope.loggedIn = false;

    $rootScope.toggleLoggedIn = function() {
        $scope.loggedIn = !$scope.loggedIn;
        console.log($scope.loggedIn);
    }
})

.controller('ListingsController', function($scope) {

    $scope.sublets = $http.get({
        url: ''
    })

    $scope.listings = [
        {
            "id": 1,
            "cover": "http://cdn.designhomes.pics/design/www.furnituregraphic.com/wp-content/uploads/2011/10/New-York-City-Apartment-1.jpg",
            "address": "49 Columbia St. W",
            "city": "Waterloo, ON",
            "price": 500
        },
        {
            "id": 2,
            "cover": "http://crumnyc.com/wp-content/uploads/2012/09/New-York-City-Apartments-for-Rent.jpg",
            "address": "49 Columbia St. W",
            "city": "Waterloo, ON",
            "price": 675
        },
        {
            "id": 3,
            "cover": "http://www.architecturaldigest.com/decor/2012-02/steven-harris-lucien-rees-roberts-new-york-apartment-article/_jcr_content/par/cn_contentwell/par-main/cn_pagination_container/cn_image.size.steven-harris-new-york-apartment-h670.jpg",
            "address": "49 Columbia St. W",
            "city": "Waterloo, ON",
            "price": 800
        },
        {
            "id": 4,
            "cover": "http://www.idesignarch.com/wp-content/uploads/Loft-Style-Apartment-Design-NY_1.jpg",
            "address": "49 Columbia St. W",
            "city": "Waterloo, ON",
            "price": 400
        },
        {
            "id": 5,
            "cover": "",
            "address": "49 Columbia St. W",
            "city": "Waterloo, ON",
            "price": 700
        }
    ]
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

    var LoginModalInstance = function ($scope, $http, $modalInstance) {
        $scope.login = {}

        $scope.submit = function () {
            $http.post("http://casa.tpcstld.me/api/authenticate", {
                email: $scope.login.email,
                password: $scope.login.password
            }).success(function(data) {
                console.log(data)
                $rootScope.toggleLoggedIn();
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
                console.log(data)
            })

            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    };
})
