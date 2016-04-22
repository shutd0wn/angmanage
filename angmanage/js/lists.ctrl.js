angular.module('app').controller('listsCtrl', ['listFactory', '$timeout', function(listFactory, $timeout){
    this.lists = listFactory.getLists();

    this.addList = function(){
		this.addListClass = listFactory.addList(this.listName) ? 'list-add-animate' : '';

//	    $timeout(function(){
//		    this.addListClass = '';
//	    }.bind(this),500);

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