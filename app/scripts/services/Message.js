(function() {
    function Message($firebaseArray) {
        let database = firebase.database().ref();
        let messageQuery = database.child("messages");
        let messageOrder = messageQuery.orderByChild("roomId");
        let messages = $firebaseArray(messageOrder);
        
        function getByRoomId (roomId) {
            return messages.equalTo(roomId);
        }
        
        return {
            getByRoomId: getByRoomId
        };
        
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();