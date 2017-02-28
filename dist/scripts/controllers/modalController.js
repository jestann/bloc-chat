(function () {
    function modalController ($uibModalInstance, Room) {
        this.roomsArray = Room.all;
        this.name = "";
        this.closeModal = $uibModalInstance.close;
        this.addRoom = function (name) {
            Room.addRoom(name);
            this.name = "";
            this.closeModal();
        };
        this.keypress = function (event) {
            if (event.key==="Enter") {
                this.addRoom(this.name);
            }
        }
    }
    
    angular.module('blocChat')
        .controller('modalController', ['$uibModalInstance','Room', modalController]);
})();