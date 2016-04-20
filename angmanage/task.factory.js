angular.module('app').factory('taskFactory', ['listFactory', function(listFactory){
    var tasks = {};

    var lists = listFactory.getLists();

    angular.forEach(lists, function (value) {
        value.tasks = [];
        // tasks[value.listName] = [];
    });
    return {
        getTasks : function () {
            return tasks;
        },

        addTaskToList : function (taskName, list) {
            var present = false;

            if(!list.tasks.length){
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

            // listFactory.setLists(tasks);
        },

        editTask : function (index, list) {
            list.tasks[index].editTask = true;
        },

        saveTask : function (index, taskName, list) {
            list.tasks[index].taskName = taskName;
            list.tasks[index].editTask = false;
        }
    }
}]);