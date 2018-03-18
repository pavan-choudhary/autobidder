angular.module('angularApp', ['ui.router','oc.lazyLoad','chart.js'])
.constant('config', {
    apibase:'http://35.200.128.175:3000'
})
.run(['$rootScope','$location', 'Auth',
	 function ($rootScope, $location, Auth) {
    	$rootScope.$on('$locationChangeStart', function (event) {
          if (!Auth.isLoggedIn()) {
            console.log('DENY');
            //event.preventDefault();
            $("#essential").hide();
            if($location.path()=='/signup')
                $location.path('/signup');
            else
            $location.path('/login');
        }
        else {
            console.log('ALLOW');
            $("#essential").show();
            if ($location.path()=='/login') {   
            $location.path('/Dashboard');
            }
        }
        $rootScope.$on('$locationChangeSuccess', function (event) {
            var path=$location.path();
            $rootScope.path=path.slice(1,$location.path().length);
        });

    });
}])