'use strict';

// Declare app level module which depends on filters, and services
angular.module('casa', [
    'ui.router',
    'casa.controllers',
    'casa.directives'
])

.run(function($rootScope, $state){
    $rootScope.$on("$viewContentLoaded", function(){
        $('html body').scrollTop(0);
        $rootScope.state = $state.$current.self.name;
    });
})

.config(function($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state('main', {
        url: "/",
        templateUrl: "/partials/main.html"
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
        templateUrl: "/partials/listings/view.html"
    })
    .state('bookmarks', {
        url: "/bookmarks",
        templateUrl: "/partials/bookmarks.html"
    })
    .state('login', {
        url: "/login",
        templateUrl: "/partials/login.html"
    })
    .state('signup', {
        url: "/signup",
        templateUrl: "/partials/signup.html"
    })
    .state('profile', {
        url: "/@{username:[a-zA-Z-]{1,30}}",
        templateUrl: "/partials/profile.html"
    })
});
