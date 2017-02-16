(function () {
    function navbarController ($uibModal, Room) {
        this.roomsArray = Room.all;
        this.openModal = $uibModal.open;
        this.template = {templateUrl: "/templates/modal.html"};
    }
    
    angular.module('blocChat')
        .controller('navbarController', ['$uibModal', 'Room', navbarController]);
})();









/* template inline for testing, if needed:
            "<div><h1>Add Chat Room</h1><div class='new-room-input'>Please enter a name for the new chat room.<input type='text' ng-model='modal.name'/><div class='new-room-input-button' ng-click='modal.addRoom(modal.name)'>Create Room</div></div></div>"
*/