(function () {
    function setmodeController ($uibModalInstance, Message) {
        this.Message = Message;
        this.closeModal = $uibModalInstance.close;
        this.save = function () {
            this.closeModal();
        };
    }
    
    angular.module('chateau')
        .controller('setmodeController', ['$uibModalInstance', 'Message', setmodeController]);
})();