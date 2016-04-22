angular.module('app').controller('listsCtrl', ['listFactory', function(listFactory){
    this.lists = listFactory.getLists();

    this.addList = function(){
        listFactory.addList(this.listName);

        this.listName = '';
    };

	this.undoChange = function(index, event){
		if(!event.keyCode || event.keyCode == 27){
			listFactory.undoChange(index);
		}
	};

    this.editList = function (index) {
        listFactory.editList(index);
    };

    this.saveList = function (index) {
        listFactory.saveList(index, this.newListName);

        this.listName = '';
    };

    this.removeList = function(index){
        listFactory.removeList(index);
    };
}]);