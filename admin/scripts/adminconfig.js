var config = function($httpProvider,$locationProvider,$stateProvider,$ocLazyLoadProvider) {
    //$locationProvider.html5Mode(true);
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.withCredentials = true;
        $stateProvider
            .state('Panel', {
                url         : '/Panel',
                templateUrl : 'public/templates/admin/panel.html',
                controller  : 'panelCtrl'
            })
            .state('login', {
                url         : '/login',
                templateUrl : 'public/templates/login.html',
                controller  : 'loginCtrl'
            })
             .state('logout', {
                url         : '/logout',
                templateUrl : 'public/templates/login.html',
                controller  : 'logoutCtrl'
            }) 
            .state('equipments', {
                url         : '/equipments/{type}',
                templateUrl : 'public/templates/equipments/equipments.html',
                resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                        loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                          // you can lazy load files for an existing module
                                 return $ocLazyLoad.load('build/admin/controller/allequipmetsCtrl.js');
                        }]
                      }
            })
            .state('carprofile', {
                url         : '/carprofile/:id',
                templateUrl : 'public/templates/carprofile.html',
                resolve: {  loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                                return $ocLazyLoad.load('build/admin/controller/carCtrl.js');
                        }]}
            })
            .state('Add_Equipment', {
                url         : '/Add_Equipment',
                templateUrl : 'public/templates/equipments/add_equip.html',
                resolve: {  loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                                return $ocLazyLoad.load('build/admin/controller/add_equipCtrl.js');
                        }]}
            })
            .state('add', {
                url         : '/add',
                templateUrl : 'public/templates/admin/addbrand.html',
                resolve: {  loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                                return $ocLazyLoad.load('build/admin/controller/addbrandCtrl.js');
                        }]}
            })
            .state('schAuction', {
                url         : '/schAuction',
                templateUrl : 'public/templates/admin/schAuction.html',
                resolve: {  loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                                return $ocLazyLoad.load('build/admin/controller/schAuction.js');
                        }]}
            })
};

config.$inject = ['$httpProvider','$locationProvider','$stateProvider','$ocLazyLoadProvider'];
app.config(config);