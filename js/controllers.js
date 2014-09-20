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
            "id": 1,
            "cover": "http://cdn.designhomes.pics/design/www.furnituregraphic.com/wp-content/uploads/2011/10/New-York-City-Apartment-1.jpg",
            "address": "49 Columbia St. W",
            "city": "Waterloo, ON"
        },
        {
            "id": 2,
            "cover": "http://crumnyc.com/wp-content/uploads/2012/09/New-York-City-Apartments-for-Rent.jpg",
            "address": "49 Columbia St. W",
            "city": "Waterloo, ON"
        },
        {
            "id": 3,
            "cover": "http://www.architecturaldigest.com/decor/2012-02/steven-harris-lucien-rees-roberts-new-york-apartment-article/_jcr_content/par/cn_contentwell/par-main/cn_pagination_container/cn_image.size.steven-harris-new-york-apartment-h670.jpg",
            "address": "49 Columbia St. W",
            "city": "Waterloo, ON"
        },
        {
            "id": 4,
            "cover": "http://www.idesignarch.com/wp-content/uploads/Loft-Style-Apartment-Design-NY_1.jpg",
            "address": "49 Columbia St. W",
            "city": "Waterloo, ON"
        },
        {
            "id": 5,
            "cover": "",
            "address": "49 Columbia St. W",
            "city": "Waterloo, ON"
        }
    ]
})