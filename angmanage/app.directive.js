angular.module('app').directive('editField', function ($timeout) {
    return {
        restrict : 'A',
        link : function (scope, element, attrs) {
            scope.$watch(attrs.editField, function(value){
                if(value){
                    element[0].focus();
                }
            });
        }
    }
});