angular.module('app').factory('taskFactory', ['listFactory', function(listFactory){
    var tasks = {};

    var lists = listFactory.getLists();

    angular.forEach(lists, function (value) {
        value.tasks = [];
    });

    return {
        getTasks : function () {
            return tasks;
        },

        addTaskToList : function (taskName, list) {
            var present = false;

            if(!list.tasks){
                list.tasks = [];
                list.tasks.push({taskName : taskName});
            }

            angular.forEach(list.tasks, function (value) {
                if(value.taskName == taskName){
                    present = true;
                }
            });

            if(!present && taskName != ''){
                list.tasks.push({taskName : taskName});
            }
        },

        editTask : function (index, list) {
            list.tasks[index].editTask = true;
        },

        saveTask : function (index, taskName, list) {
            list.tasks[index].taskName = taskName;
            list.tasks[index].editTask = false;
        },

        removeTask : function (index, list) {
            list.tasks.splice(index, 1);
        },

	    undoChange : function(index, list){
		    list.tasks[index].editTask = false;
	    }
    }
}]);