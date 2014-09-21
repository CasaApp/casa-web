'use strict';

// Declare app level module which depends on filters, and services
angular.module('casa', [
    'ui.router',
    'ui.select2',
    'ui.bootstrap',
    'angularFileUpload',
    'casa.controllers',
    'casa.directives'
])

.run(function($rootScope, $state){
    $rootScope.loggedIn = false;

    $rootScope.listings = [
        {
            "id": 1,
            "cover": "http://cdn.designhomes.pics/design/www.furnituregraphic.com/wp-content/uploads/2011/10/New-York-City-Apartment-1.jpg",
            "address": "49 Columbia St. W",
            "city": "Waterloo, ON",
            "price": 500,
            "distance": 1900,
            "distance_str": "1.9km",
            "date": {
                "start": 1409976000000,
                "end": 1419138000000
            },
            "rooms_available": 1,
            "tags": [
                ""
            ],
            "bookmarked": false
        },
        {
            "id": 2,
            "cover": "http://crumnyc.com/wp-content/uploads/2012/09/New-York-City-Apartments-for-Rent.jpg",
            "address": "333 King St. N",
            "city": "Waterloo, ON",
            "price": 870,
            "distance": 1900,
            "distance_str": "1.9km",
            "date": {
                "start": 1409576000000,
                "end": 1428138000000
            },
            "rooms_available": 5,
            "tags": [
                ""
            ],
            "bookmarked": true
        },
        {
            "id": 3,
            "cover": "http://www.architecturaldigest.com/decor/2012-02/steven-harris-lucien-rees-roberts-new-york-apartment-article/_jcr_content/par/cn_contentwell/par-main/cn_pagination_container/cn_image.size.steven-harris-new-york-apartment-h670.jpg",
            "address": "65 Columbia St. W",
            "city": "Waterloo, ON",
            "price": 675,
            "distance": 1800,
            "distance_str": "1.8km",
            "date": {
                "start": 1419976000000,
                "end": 1421138000000
            },
            "rooms_available": 2,
            "tags": [
                ""
            ],
            "bookmarked": false
        },
        {
            "id": 4,
            "cover": "http://www.idesignarch.com/wp-content/uploads/Loft-Style-Apartment-Design-NY_1.jpg",
            "address": "228 Oprington Place",
            "city": "Kitchener, ON",
            "price": 550,
            "distance": 5500,
            "distance_str": "5.5km",
            "date": {
                "start": 1409976000000,
                "end": 1419138000000
            },
            "rooms_available": 1,
            "tags": [
                ""
            ],
            "bookmarked": true
        }
    ]

    $rootScope.$on("$viewContentLoaded", function(){
        $('html body').scrollTop(0);
        $rootScope.state = $state.$current.self.name;
    });
})

.config(function($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state('home', {
        url: "/",
        templateUrl: "/partials/listings/_layout.html"
    })
    .state('listings', {
        url: "/listings",
        templateUrl: "/partials/listings/_layout.html"
    })
    .state('listings.new', {
        url: "/new",
        templateUrl: "/partials/listings/new.html"
    })
    .state('listings.view', {
        url: "/{subletId:[0-9]{1,8}}",
        controller: "SubletController",
        templateUrl: "/partials/listings/view.html"
    })
    .state('bookmarks', {
        url: "/bookmarks",
        templateUrl: "/partials/bookmarks.html"
    })
    .state('signup', {
        url: "/signup",
        templateUrl: "/partials/signup.html"
    })
    .state('profile', {
        url: "/me",
        templateUrl: "/partials/me.html"
    })
});
