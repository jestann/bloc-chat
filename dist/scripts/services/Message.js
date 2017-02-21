(function() {
    function Message($firebaseArray, Room) {
        let Message = {
            username: "",
            room: "",
            roomName: "",
            roomChats: [],
            rooms: Room.all
        };
        
        let messageQuery = firebase.database().ref().child("messages");
        
        Message.setRoom = function (roomId) {
            Message.room = roomId;

            Message.roomName = Message.rooms.filter((room) => room.$id===roomId)[0].$value;

            Message.roomChats = $firebaseArray(messageQuery.orderByChild("roomId").equalTo(roomId));
            // console.log(Message.roomChats);
            // this console.log is always an empty array... why is that?
        }
        
        return Message;        
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', 'Room',  Message]);
})();