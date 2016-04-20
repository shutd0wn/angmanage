angular.module('app').controller('listsCtrl', ['$scope', 'listFactory', function($scope, listFactory){
    $scope.lists = listFactory.getLists();

    $scope.addList = function(){
        listFactory.addList($scope.listName);


        $scope.listName = '';
    };

    $scope.editList = function (index, listName) {
        listFactory.editList(index, listName);
    };

    $scope.saveList = function (index, listName) {
        listFactory.saveList(index, listName);
    };
}]);