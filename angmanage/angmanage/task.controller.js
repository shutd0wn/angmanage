angular.module('app').controller('taskCtrl', ['$scope', 'taskFactory', function ($scope, taskFactory) {
    this.tasks = taskFactory.getTasks();

    this.addTask = function (list) {
        taskFactory.addTaskToList(this.taskName, list);

        this.taskName = '';
    };

    this.editTask = function(index, list){
        taskFactory.editTask(index, list);
    };

    this.saveTask = function (index, list) {
	    console.log('model', this.newTaskName)
	    taskFactory.saveTask(index, this.newTaskName, list);
    }
}]);