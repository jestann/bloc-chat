(function() {
    function chatController (Message) {
        this.name = "";
        this.messageList = [];
        this.getRoom = function (room) {
            Message.getByRoomId(room.val("roomId"));
        }
        
        // chat.username, chat.timestamp, chat.content
        
    }
    
    angular.module('blocChat')
        .controller('chatController', ['Message', chatController]);
})();