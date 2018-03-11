angular.module('adminApp')
.controller('carCtrl', ['$scope','$stateParams','Auth', function ($scope,$stateParams,Auth) {
    $scope.data=$stateParams.user;
     $scope.car={'id':1,'brand':'Ford','model':'Mustang','variant':'LTS-102','year':'2010',
				'likes':'4','bought_price':'400000','expectations':'450000' , 'dealer':'Dealer name',
				'dealer_id':13,'owner':'Owner name', 'city':'Indore','km':'20000km','image':'build/sample/Ford-mustang.jpg',
				'category':{'offline':true,'buynow':false,'Auction':true,'D2D':true },
				'image2':'build/sample/lambo.jpg'};
 	var like=true;
 	if (like==true) {
 		$("#like button i").css("color", "navy");
 	}
 	else
 		$("#like button i").css("color", "grey");
 	
 	$scope.showCar=function(img){
 		$scope.modalimg=img;
 	};

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
 	$scope.edit=false;
 	if ($scope.car.dealer_id==Auth.getId()) 
 		{ $scope.edit=true;}
 	else {
 		$scope.edit=false;
 	}
 	$scope.editCat=function(){
 	console.log("sdasd");
 	};
 }]);   