angular.module('angularApp')
.controller('profileCtrl', ['$scope','$http','config', function ($scope,$http,config) {
 	$http.get(config.apibase+"/profile/3")
        .then(function (resp) {
            console.log(resp);
        });

    $scope.user={
	    "id": "1",
	    "category": "2",
	    "email": "choudhary.pavan18@outlook.com",
	    "wallet": "7800",
	    "address": "239 EWS jawahar nagar, Palasiya Indore",
	    "mobile": "9827570267",
	    "last_name": "surname",
	    "first_name": "mera_naam",
	    "middle_name": "middle_ka_naam",
	    "altmobile": "234567alternate_mobile_no.56789",
	    "city": "Indore",
	    "state": "Madhya Pradesh",
	    "country": "meri_country",
	    "zipcode": "452004",
	    "pan_number": "99087654356798",
	    "GSIN":"12PAVANCHOUDHARY"
	};
	$scope.profilestatus=false;
	if($scope.profilestatus==true)
		$scope.next="public/templates/profile/completeprofile.html";
	else
		$scope.next="public/templates/profile/incompleteprofile.html";

	if($scope.user.category==1)
		$scope.category='User';
	else if($scope.user.category==2)
		$scope.category="Dealer";
	console.log($scope.category	);
 }]);   