'use strict';

angular.module('dimensions.controllers', [])

.controller('ApplicationController', function($scope) {
})
.controller('SocialController', function($scope) {
    $scope.socialNetworks = [
        {
            "name": "Facebook",
            "class": "bg-facebook",
            "date": "May 24, 2014",
            "state": "social.facebook"
        },
        {
            "name": "Google+",
            "class": "bg-googleplus",
            "date": "May 24, 2014",
            "state": "social.googleplus"
        },
        {
            "name": "Instagram",
            "class": "bg-instagram",
            "date": "May 24, 2014",
            "state": "social.instagram"
        },
        {
            "name": "LinkedIn",
            "class": "bg-linkedin",
            "date": "May 24, 2014",
            "state": "social.linkedin"
        },
        {
            "name": "Pinterest",
            "class": "bg-pinterest",
            "date": "May 24, 2014",
            "state": "social.pinterest"
        },
        {
            "name": "Twitter",
            "class": "bg-twitter",
            "date": "May 24, 2014",
            "state": "social.twitter"
        },
        {
            "name": "Vimeo",
            "class": "bg-vimeo",
            "date": "May 24, 2014",
            "state": "social.vimeo"
        },
        {
            "name": "YouTube",
            "class": "bg-youtube",
            "date": "May 24, 2014",
            "state": "social.youtube"
        }
    ]
})
.controller('MobileController', function($scope) {
    $scope.mobileOS = [
        {
            "name": "Android",
            "class": "bg-android",
            "date": "May 24, 2014"
        },
        {
            "name": "Apple",
            "class": "bg-apple",
            "date": "May 24, 2014"
        },
        {
            "name": "BlackBerry",
            "class": "bg-blackberry",
            "date": "May 24, 2014"
        }
    ]
})
.controller('UploadController', function($scope, fileReader) {
    $scope.getFile = function () {
        fileReader.readAsDataUrl($scope.file, $scope)
        .then(function(result) {
            $scope.fileCover = result;
        });
    };
});

(function (module) {
    var fileReader = function ($q, $log) {

        var onLoad = function(reader, deferred, scope) {
            return function () {
                scope.$apply(function () {
                    deferred.resolve(reader.result);
                });
            };
        };

        var onError = function (reader, deferred, scope) {
            return function () {
                scope.$apply(function () {
                    deferred.reject(reader.result);
                });
            };
        };

        var onProgress = function(reader, scope) {
            return function (event) {
                scope.$broadcast("fileProgress",
                                 {
                                     total: event.total,
                                     loaded: event.loaded
                                 });
            };
        };

        var getReader = function(deferred, scope) {
            var reader = new FileReader();
            reader.onload = onLoad(reader, deferred, scope);
            reader.onerror = onError(reader, deferred, scope);
            reader.onprogress = onProgress(reader, scope);
            return reader;
        };

        var readAsDataURL = function (file, scope) {
            var deferred = $q.defer();

            var reader = getReader(deferred, scope);
            reader.readAsDataURL(file);

            return deferred.promise;
        };

        return {
            readAsDataUrl: readAsDataURL
        };
    };

    module.factory("fileReader", ["$q", "$log", fileReader]);

}(angular.module("dimensions")));
