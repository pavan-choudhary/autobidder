angular.module('angularApp')
.controller('mainController', ['$scope', 'Auth', '$location', function ($scope, Auth, $location) {
$scope.hide=function(){  $('sidebar, topbar').hide();  };
$scope.show=function(){  $('sidebar, topbar').show();  };

$scope.$watch(Auth.isLoggedIn, function (value, oldValue) {    
    if($location.path()!='/login')
    	$("#essential").show();
    else $("#essential").hide();

    if(!value && oldValue) {
      console.log("Disconnect");
      $location.path('/login');
    }

    if(value) {
      console.log("Connect");
      //Do something when the user is connected
    }
  }, true);


 }]);