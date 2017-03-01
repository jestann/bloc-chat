(function () {
    function setmodeController ($uibModalInstance, Message) {
        this.Message = Message;
        this.closeModal = $uibModalInstance.close;
        this.save = function () {
            this.closeModal();
        };
    }
    
    angular.module('blocChat')
        .controller('setmodeController', ['$uibModalInstance', 'Message', setmodeController]);
})();