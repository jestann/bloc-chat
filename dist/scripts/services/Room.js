(function() {
    function Room ($firebaseArray) {
        let database = firebase.database().ref();
        let roomsQuery = database.child("rooms");
        let rooms = $firebaseArray(roomsQuery);
        
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