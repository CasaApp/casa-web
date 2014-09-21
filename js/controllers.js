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

.controller('PhotoUploadCtrl', function($scope, $upload) {
    $scope.onFileSelect = function($files) {
    //$files: an array of files selected, each file has name, size, and type.
    for (var i = 0; i < $files.length; i++) {
      var file = $files[i];
      $scope.upload = $upload.upload({
        url: 'server/upload/url', //upload.php script, node.js route, or servlet url
        //method: 'POST' or 'PUT',
        //headers: {'header-key': 'header-value'},
        //withCredentials: true,
        data: {myObj: $scope.myModelObj},
        file: file, // or list of files ($files) for html5 only
        //fileName: 'doc.jpg' or ['1.jpg', '2.jpg', ...] // to modify the name of the file(s)
        // customize file formData name ('Content-Disposition'), server side file variable name.
        //fileFormDataName: myFile, //or a list of names for multiple files (html5). Default is 'file'
        // customize how data is added to formData. See #40#issuecomment-28612000 for sample code
        //formDataAppender: function(formData, key, val){}
      }).progress(function(evt) {
        console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
      }).success(function(data, status, headers, config) {
        // file is uploaded successfully
        console.log(data);
      });
      //.error(...)
      //.then(success, error, progress);
      // access or attach event listeners to the underlying XMLHttpRequest.
      //.xhr(function(xhr){xhr.upload.addEventListener(...)})
    }
    /* alternative way of uploading, send the file binary with the file's content-type.
       Could be used to upload files to CouchDB, imgur, etc... html5 FileReader is needed.
       It could also be used to monitor the progress of a normal http post/put request with large data*/
    // $scope.upload = $upload.http({...})  see 88#issuecomment-31366487 for sample code.
  };
})
