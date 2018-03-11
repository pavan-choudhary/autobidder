angular.module('angularApp')
    .controller('signupCtrl', [ '$scope','config','$http','$location','Auth',  function ($scope,config,$http,$location,Auth) {
  	$scope.hide();
    	$scope.signup=function(){
	    	 $http({
		        url: config.apibase+'/signup',
		        method: "POST",
		        data:$scope.sign,
		    	})
		        .then(function (resp) {
		        	console.log(resp);
				    if (resp.data.msg=="Hello, Welcome") 
				    	{	
				    		Auth.setUser(resp.data.name);
					    	$("#essential").show();
					    	$location.path("/Dashboard");
				    	}
				    else {
				     	alert(resp.data.msg.usrmsg);
				     } 
				});
	    };
    }])