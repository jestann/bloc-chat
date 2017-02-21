(function () {
    function navbarController ($uibModal, Room, Message) {
        this.roomsArray = Room.all;
        this.openModal = $uibModal.open;
        this.roomTemplate = {
            templateUrl: "/templates/modal.html", 
            controller: "modalController", 
            controllerAs: "modal"
        };
        this.userTemplate = {
            templateUrl: "/templates/userModal.html",
            controller: "userController",
            controllerAs: "user"
        };
        this.setRoom = Message.setRoom;
        this.Message = Message;
    }
    
    angular.module('blocChat')
        .controller('navbarController', ['$uibModal', 'Room', 'Message', navbarController]);
})();