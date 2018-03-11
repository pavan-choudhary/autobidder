    
    .config(['$httpProvider','$locationProvider','$stateProvider','$ocLazyLoadProvider', function($httpProvider,$locationProvider,$stateProvider,$ocLazyLoadProvider) {
        $locationProvider.html5Mode(true);
         //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.withCredentials = true;
        $stateProvider
            .state('login', {
                url         : '/login',
                templateUrl : 'public/templates/login.html',
                controller  : 'loginCtrl'
            })
            .state('logout', {
                url         : '/logout',
                controller  : 'logoutCtrl'
            })
            .state('signup', {
                url         : '/signup',
                templateUrl : 'public/templates/signup.html',
                resolve: { loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                                 return $ocLazyLoad.load('build/scripts/controller/signupCtrl.js');
                        }]
                      } 
            })    
            .state('/', {
                url         : '/Dashboard',
                templateUrl : 'public/templates/dashboard/dashboard.html',
                 resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                        loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                          // you can lazy load files for an existing module
                                 return $ocLazyLoad.load('build/scripts/controller/dashboardCtrl.js');
                        }]
                      }
            })
            .state('Dashboard', {
                url         : '/Dashboard',
                templateUrl : 'public/templates/dashboard/dashboard.html',
                resolve: {  loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                                return $ocLazyLoad.load('build/scripts/controller/dashboardCtrl.js');
                        }]}
            })        
            .state('Dealer_Equipments', {
                url         : '/Dealer_Equipments',
                templateUrl : 'public/templates/equipments/equipments.html',
                resolve: {
                        loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                          // you can lazy load files for an existing module
                                 return $ocLazyLoad.load('build/scripts/controller/equipments/dealer_equipmentsCtrl.js');
                        }]
                      }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
            })
            .state('Add_Equipment', {
                url         : '/Add_Equipment',
                templateUrl : 'public/templates/equipments/add_equip.html',
                resolve: {  loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                                return $ocLazyLoad.load('build/scripts/controller/equipments/add_equipCtrl.js');
                        }]}
            })
            .state('DRM', {
                url         : '/DRM',
                templateUrl : 'public/templates/drm/drm.html',
                resolve: {  loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                                return $ocLazyLoad.load('build/scripts/controller/drm/drmCtrl.js');
                        }]}
            })
            .state('Add_Lead', {
                url         : '/Add_Lead',
                templateUrl : 'public/templates/drm/add_lead.html',
                resolve: {  loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                                return $ocLazyLoad.load('build/scripts/controller/drm/addleadCtrl.js');
                        }]}
            })
            .state('carprofile', {
                url         : '/carprofile/:id',
                templateUrl : 'public/templates/carprofile.html',
                resolve: {  loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                                return $ocLazyLoad.load('build/scripts/controller/carCtrl.js');
                        }]}
            })
            .state('profile', {
                url         : '/profile',
                templateUrl : 'public/templates/profile/profile.html',
                resolve: {  loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                                return $ocLazyLoad.load('build/scripts/controller/profileCtrl.js');
                        }]}
            })
            .state('auction', {
                url         : '/auction',
                templateUrl : 'public/templates/auction/auction.html',
                resolve: {  loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                                return $ocLazyLoad.load('build/scripts/controller/auction/auctionCtrl.js');
                        }]}
            })
            .state('upcommingauction', {
                url         : '/upauction',
                templateUrl : 'public/templates/auction/upcommingauction.html', 
                resolve: {  loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                                return $ocLazyLoad.load('build/scripts/controller/auction/upauctionCtrl.js');
                        }]}
            })            
    }]);