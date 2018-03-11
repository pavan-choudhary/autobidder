angular.module('angularApp')

    .controller('loginCtrl', ['config','$location','$scope','$rootScope','$http', 'Auth', function (config,$location,$scope,$rootScope,$http, Auth) {

	  $scope.login = function () {
	    // Ask to the server, do your job and THEN set the user
        $http({
        url: config.apibase+'/login',
        method: "POST",
        data:{'mobile':$scope.mobile,'password':$scope.password },
    	})
        .then(function (resp) { 
        	console.log(resp);
		    if (resp.data.msg=="Hello, Welcome") 
		    	{	
		    		Auth.setUser(resp.data.name);
		    		Auth.setId(resp.data.id);
			    	$("#essential").show();
			    	$location.path("/Dashboard");
		    	}
		    else {
		     	alert("Invalid Login");
		     } 
		});
	}
}])

.controller('logoutCtrl', ['config', '$scope','$http',  function (config,$scope,$http) {
		$http.get(config.apibase+"/logout")
		.then(function (resp) {
			console.log(resp);
			localStorage.removeItem("auto_user");
			localStorage.removeItem("id");
		});
   }]);