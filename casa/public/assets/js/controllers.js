'use strict';

angular.module('casa.controllers')

.controller('ApplicationController', function($scope, $rootScope, $state  ) {
    $rootScope.toggleLoggedIn = function() {
        $rootScope.loggedIn = !$rootScope.loggedIn;
    }
})
'use strict';

angular.module('casa.controllers')

.controller('ListingsController', function($scope, $rootScope, $http, $modal, $log) {
    $scope.isBookmarksListShowing = false;

    $scope.filter = {
        sort_order: 0,
        distance: 10,
        start_date: "2014-09-06",
        end_date: "2014-12-19",
        max_price: 1000,
        rooms: 1
    };
})

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