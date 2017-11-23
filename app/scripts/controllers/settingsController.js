(function () {
    function settingsController ($uibModal, Room, Message) {
        this.roomsArray = Room.all;
        this.Message = Message;
        this.openModal = $uibModal.open;
        this.settingsTemplate = {
            templateUrl: "/templates/settingsModal.html", 
            controller: "setmodeController", 
            controllerAs: "setmode"
        };
    }
    
    angular.module('chateau')
        .controller('settingsController', ['$uibModal', 'Room', 'Message', settingsController]);
})();