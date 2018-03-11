angular.module('angularApp')
.controller('profileCtrl', ['$scope','$http','config','Auth', function ($scope,$http,config,Auth) {
 	var id=Auth.getId();
 	$http.get(config.apibase+"/profile/"+id)
        .then(function (resp) {
        	console.log(resp.data);
            $scope.profile=resp.data.data;
            if($scope.profile.category==1)
				$scope.category='User';
			else if($scope.profile.category==2)
				$scope.category="Dealer";
		    });

	$scope.profilestatus=false;
	if($scope.profilestatus==true)
		$scope.next="public/templates/profile/completeprofile.html";
	else
		$scope.next="public/templates/profile/incompleteprofile.html";
 }]);   