(function() {
    function Message($firebaseArray, Room, User) {
        let Message = {
            username: User.username,
            roomId: "",
            roomName: "",
            roomChats: [],
            Room: Room
        };
        
        let messageQuery = firebase.database().ref().child("messages");
        
        Message.setRoom = function (roomId) {
            Message.roomId = roomId;
            console.log(roomId);

            console.log(Message.Room.all);
            Message.roomName = Message.Room.all.filter((room) => room.$id===roomId);
            console.log(Message.roomName)
            
            
            Message.roomChats = $firebaseArray(messageQuery.orderByChild("roomId").equalTo(roomId));
            
            console.log(Message.roomChats);
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
        .module('blocChat')
        .factory('Message', ['$firebaseArray', 'User', 'Room', Message]);
})();