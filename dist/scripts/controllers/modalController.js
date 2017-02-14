(function () {
    function modalController (Room) {
        this.roomsArray = Room.all;
        this.addRoom = Room.addRoom;
    }
    
    angular.module('blocChat')
        .controller('modalController', ['$uibModal','Room', modalController]);
})();