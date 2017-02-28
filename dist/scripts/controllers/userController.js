(function () {
    function userController ($uibModalInstance, $cookies, Message) {
        this.username = "";
        this.Message = Message;
        this.closeModal = $uibModalInstance.close;
        
        this.addUser = function (username) {
            if (username) {
                $cookies.put('currentUser', username);
                Message.username = username;
                
                // checking for accurate change
                console.log("changed to ", Message.username);
                console.log("stored as ", $cookies.get('currentUser'));

                this.closeModal();
            }
        };
        this.keypress = function (event) {
            if (event.key === "Enter") {
                this.addUser(this.username);
            }
        }
    }
    
    angular.module('blocChat')
        .controller('userController', ['$uibModalInstance', '$cookies', 'Message', userController]);
})();