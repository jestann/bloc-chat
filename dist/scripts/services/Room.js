(function() {
    function Room ($firebaseArray) {
        let Room = {
            all: []
        }

        let roomsQuery = firebase.database().ref().child("rooms");
        Room.all = $firebaseArray(roomsQuery);
        console.log(Room.all);
        
        Room.addRoom = function (name) { 
            Room.all.$add(name);
        };
        
        return Room;
    }
    
    angular.module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();