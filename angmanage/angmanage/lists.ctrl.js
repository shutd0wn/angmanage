angular.module('app').controller('listsCtrl', ['listFactory', function(listFactory){
    this.lists = listFactory.getLists();

    this.addList = function(){
        listFactory.addList(this.listName);

        this.listName = '';
    };

    this.editList = function (index) {
        listFactory.editList(index);
    };

    this.saveList = function (index) {
        listFactory.saveList(index, this.newListName);

	    this.listName = '';
    };
}]);