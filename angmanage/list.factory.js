angular.module('app').factory('listFactory', function () {
    return {
        lists : [
            {listName : 'Firstlist'},
            {listName : 'Secondlist'},
            {listName : 'Trirdlist'}
        ],

        getLists : function () {
            return this.lists;
        },

        addList : function (name) {
            var present = false;

            angular.forEach(this.lists, function(value){
                if(value.listName == name){
                    present = true;
                }
            });

            if(!present && name != ''){
                this.lists.push({listName:name});
            }
        },

        editList : function (index) {
            this.lists[index].editList = true;
        },
        
        saveList : function (index, listName) {
            this.lists[index].listName = listName;
            this.lists[index].editList = false;
        },

        setLists : function(lists){
            this.lists = lists;
        }
    }
});