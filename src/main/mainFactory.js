angular.module('angularApp')
	.factory('Auth', function(){
	var user;
	var path;
	return{
	    setUser : function(aUser){
	        localStorage.setItem("auto_user",aUser);

	    },
	    isLoggedIn : function(){
	    	user=localStorage.getItem("auto_user");
	        return(user)? user : false;
	    },
	    getUser :function(){
	    	return user;
	    }	
	  }
	});