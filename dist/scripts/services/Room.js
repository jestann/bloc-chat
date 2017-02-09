(function() {
    function Room ($firebaseArray) {
        var database = firebase.database().ref();
        var roomsQuery = database.child("rooms");
        var rooms = $firebaseArray(roomsQuery);
        
        function addRoom(name) { 
            rooms.$add(name);
        }
        
        return {
            all: rooms,
            addRoom: addRoom
        };
    }
    
    angular.module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();