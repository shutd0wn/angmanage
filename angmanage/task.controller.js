angular.module('app').controller('taskCtrl', ['$scope', 'taskFactory', function ($scope, taskFactory) {
    $scope.tasks = taskFactory.getTasks();

    $scope.addTask = function (list) {
        taskFactory.addTaskToList($scope.taskName, list);

        $scope.taskName = '';
    };

    $scope.editTask = function(index, list){
        taskFactory.editTask(index, list);
    };

    $scope.saveTask = function (index, newTaskName, list) {
        taskFactory.saveTask(index, newTaskName, list);
    }
}]);