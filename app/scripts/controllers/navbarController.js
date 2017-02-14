(function () {
    function navbarController (Room, $uibModal) {
        this.roomsArray = Room.all;
        this.openModal = $uibModal.open({templateUrl: "/templates/modal.html"});
    }
    
    angular.module('blocChat')
        .controller('navbarController', ['$uibModal', 'Room', navbarController]);
})();