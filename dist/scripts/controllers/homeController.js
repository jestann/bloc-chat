(function () {
    function homeController(Room) {
        this.roomsArray = Room.all;
    }
    
    angular.module('blocChat')
        .controller('homeController', ['Room', homeController]);
})();

// -tpls (includes templates)