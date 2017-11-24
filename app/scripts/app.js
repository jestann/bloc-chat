(function() { 
    function config ($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
        });
        
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'homeController as home',
                templateUrl: '/templates/home.html'
            })
            .state('chatroom', {
                url: '/',
                controller: 'chatController as chatroom',
                templateUrl: '/templates/chatroom.html'
        });  
    }
    
    angular
        .module('chateau', ['ui.bootstrap','ui.router', 'firebase', 'ngCookies'])
        .config(config);
})();



// RUN BLOCK for user authentication

(function() {
    function userCookies($cookies, $uibModal, Message) {
        // for testing
        // $cookies.put('currentUser', "");
        
        // checking for username at login
        let thisUser = $cookies.get('currentUser');
        Message.username = thisUser;
        console.log("it was ", thisUser);
        
        if (!thisUser) {
            $uibModal.open({
                controller: "userController",
                controllerAs: "user",
                templateUrl: "/templates/userModal.html"
            });
        }
    }
        
        angular
            .module('chateau')
            .run(['$cookies', '$uibModal', 'Message', userCookies]);
})();