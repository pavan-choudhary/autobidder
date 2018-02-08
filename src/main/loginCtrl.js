angular.module('angularApp')

    .controller('loginCtrl', ['config','$location','$scope','$rootScope','$http', 'Auth', function (config,$location,$scope,$rootScope,$http, Auth) {

	  $scope.login = function () {
	    // Ask to the server, do your job and THEN set the user
        $http({
        url: config.apibase+'/login',
        method: "POST",
        data:{"mobile":$scope.mobile,"password":$scope.password},
    	})
        .then(function (resp) { 
		    if (resp.data.msg=="Hello, Welcome") 
		    	{	
		    		Auth.setUser(resp.data.name);
			    	$("#essential").show();
			    	$location.path("/Dashboard");
		    	} 
		});
	}
}])

.controller('logoutCtrl', [ '$scope','$http',  function ($scope,$http) {
		$http.get("http://auctioning-192405.appspot.com/logout")
		.then(function (resp) {
			console.log(resp);
			localStorage.removeItem("auto_user");
		});
   }]);