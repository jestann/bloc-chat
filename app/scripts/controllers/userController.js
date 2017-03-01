(function () {
    function userController ($uibModalInstance, $firebaseArray, User) {
        this.username = "";
        this.email = "";
        this.password = "";
        this.error = null;
        
        this.User = User;
        this.Message = Message;
        this.closeModal = $uibModalInstance.close;
        
        this.signIn = function (username, email, password) {
            if (this.User.exists(username)) {
                if (username && password) {
                    this.error = this.User.signIn(username, password);
                    
                    if (!error) {
                        this.username = "";
                        this.email = "";
                        this.password = "";
                        this.closeModal();
                    }
                }
            } else if (username && email && password) {
                this.error = this.User.addUser(username, email, password);
                
                if (!error) {
                    this.username = "";
                    this.email = "";
                    this.password = "";
                    this.closeModal();
                }
            }
        };
        
        this.keypress = function (event) {
            if (event.key === "Enter") {
                this.signIn(this.username, this.email, this.password);
            }
        };
    }
    
    angular.module('blocChat')
        .controller('userController', ['$uibModalInstance', '$firebaseArray', 'User', userController]);
})();