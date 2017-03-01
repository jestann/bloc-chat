(function () {
    function userController ($uibModalInstance, $firebaseArray, Message) {
        this.username = "";
        this.Message = Message;
        this.closeModal = $uibModalInstance.close;
        
        this.addUser = function (username, email, password) {
            if (username && email && password) {
                let auth = firebase.auth();
                let create = auth.createUserWithEmailAndPassword;
                create(email, password);
                $firebaseArray
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
        .controller('userController', ['$uibModalInstance', '$firebaseArray', 'Message', userController]);
})();