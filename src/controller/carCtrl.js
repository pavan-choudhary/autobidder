angular.module('angularApp')
.controller('carCtrl', ['$scope','$stateParams', function ($scope,$stateParams) {
    $scope.data=$stateParams.user;
    $scope.car={'brand':'Ford','model':'Mustang','variant':'LTS-102','year':'2010',
				'likes':'4','bought_price':'400000','expectations':'450000' , 'dealer':'Dealer name','owner':'Owner name', 'city':'Indore','km':'20000km','image':'build/sample/Ford-mustang.jpg','image2':'build/sample/lambo.jpg'};
 	
 	$scope.showCar=function(img){
 		$scope.modalimg=img;
 	};
 	var like=true;
 	if (like==true) {
 		$("#like button i").css("color", "navy");
 	}
 	else
 		$("#like button i").css("color", "grey");

 	$scope.like=function()
 	{	
 	 	if (like==true) {
 	 		like=false;
 	 		$("#like button i").css("color", "grey");
 	 	}	
 	 	else{
 	 		like =true;
 	 		$("#like button i").addClass('zoom');
 	 		$("#like button i").css("color", "navy");
 	 	}
 	};
 }]);   