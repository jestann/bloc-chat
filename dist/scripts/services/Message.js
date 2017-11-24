(function() {
    function Message($firebaseArray, Room, $cookies) {
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
        
        Message.send = function (content) {
            Message.roomChats.$add({
                roomId: Message.room,
                content: content,
                sentAt: Date.now(),
                username: Message.username
            });
        }
        
        return Message;        
    }
    
    angular
        .module('chateau')
        .factory('Message', ['$firebaseArray', 'Room',  '$cookies', Message]);
})();