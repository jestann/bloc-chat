(function () {
    function modalController ($uibModal, Room) {
        this.roomsArray = Room.all;
        this.name = "type a name here...";
        this.addRoom = function (name) {
            Room.addRoom(name);
            this.name = "type a name here...";
            // $uibModal.close();
        };
    }
    
    angular.module('blocChat')
        .controller('modalController', ['$uibModal','Room', modalController]);
})();