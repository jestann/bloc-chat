(function () {
    function navbarController ($uibModal, Room, Message) {
        this.roomsArray = Room.all;
        this.openModal = $uibModal.open;
        this.template = {
            templateUrl: "/templates/modal.html", 
            controller: "modalController", 
            controllerAs: "modal"
        };
        this.setRoom = Message.setRoom;
    }
    
    angular.module('blocChat')
        .controller('navbarController', ['$uibModal', 'Room', 'Message', navbarController]);
})();