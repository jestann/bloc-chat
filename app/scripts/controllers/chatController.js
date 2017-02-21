(function () {
    function chatController (Message) {
        this.Message = Message;
        
        // console.log(this.Message.roomChats);
        // this console.log is always an empty array, why?
        
        // this.roomId = Message.roomId;
        // this.roomName = Message.roomName;
        // this.roomChats = Message.roomChats;
    }
    
    angular
        .module('blocChat')
        .controller('chatController', ['Message', chatController]);
})();