angular.module('angularApp')
    .controller('signupCtrl', [ '$scope','config',  function ($scope,config) {
  	$scope.hide();
    	$scope.signup=function(){
	    	$http({
	        url: config.apibase+'/signup',
	        method: "POST",
	        data:$scope.signup,
	    	})
	        .then(function (resp) { 
	        	//$location.path("/Dashboard");
			    console.log(resp);
			    } 
			);
	    };
    }])