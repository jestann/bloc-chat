(function () {
    function chatController (Message) {
        this.Message = Message;
        console.log(this.Message.roomChats);
        // this.roomId = Message.roomId;
        // this.roomName = Message.roomName;
        // this.roomChats = Message.roomChats;
    }
    
    angular
        .module('blocChat')
        .controller('chatController', ['Message', chatController]);
})();