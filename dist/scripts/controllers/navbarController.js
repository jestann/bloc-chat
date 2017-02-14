(function () {
    function navbarController (Room) {
        this.roomsArray = Room.all;
    }
    
    angular.module('blocChat')
        .controller('navbarController', ['Room', navbarController]);
})();