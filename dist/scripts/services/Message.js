(function() {
    function Message($firebaseArray, Room) {
        let room = "";
        let roomName = "";
        let roomChats = [];
        let roomChatObj = {};
        let rooms = Room.all;
        let messageQuery = firebase.database().ref().child("messages");
        
        function setRoom (roomId) {
            room = roomId;
            roomName = rooms.filter((room) => room.$id===roomId)[0].$value;
            console.log(roomName);
            
            roomChats = []; messageQuery.orderByChild("roomId").equalTo(roomId).on('value', (snapshot) => roomChatObj = snapshot.val());
            // roomChats = $firebaseArray(roomChats);
            for (let key in roomChatObj) {
               roomChats.push(roomChatObj[key]);
            }
            console.log(roomChats);
        }
        
        return {
            setRoom: setRoom,
            room: room,
            roomName: roomName,
            roomChats: roomChats
        };
        
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', 'Room',  Message]);
})();