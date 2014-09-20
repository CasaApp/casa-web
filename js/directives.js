'use strict';

angular.module('dimensions.directives', [])
.directive('holder', function ($compile) {
    return {
        link: function (scope, element, attrs) {
            element.addClass('placeholder');
            Holder.run({ images: element[0], nocss: true });
        }
    };
})
.directive("ngFileSelect",function(){
    return {
        link: function($scope, el){
            el.bind("change", function(e){
                $scope.file = (e.srcElement || e.target).files[0];
                $scope.getFile();
            })
        }
    }
})
