function () { 
    function config ($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
        });
        
        $stateProvider
            .state('home', {
                url: '/',
                // controller: 'homeControl as home',
                // templateUrl: '/templates/home.html'
            })
        });  
    }
    
    angular
        .module('blocChat', ['ui.router', 'firebase'])
        .config(config);
}();