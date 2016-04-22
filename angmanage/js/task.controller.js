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
        taskFactory.saveTask(index, this.newTaskName, list);
    };

    this.removeTask = function (index, list) {
        taskFactory.removeTask(index, list);
    };

	this.undoChange = function(index, event, list){
		if(!event.keyCode || event.keyCode == 27){
			taskFactory.undoChange(index, list);
		}
	};
}]);