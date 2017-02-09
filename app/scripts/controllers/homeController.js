(function () {
    function homeController(Room) {
        this.roomsArray = Room.all;
//        this.roomsArray = [{name: 'room1'}];
//        var id = Room.addRoom("hello");
//        console.log(id);
    }
    
    angular.module('blocChat')
        .controller('homeController', ['Room', homeController]);
})();

// -tpls (includes templates)