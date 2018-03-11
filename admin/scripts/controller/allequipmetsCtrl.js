angular.module('adminApp')
.controller('equipmentsCtrl', [ '$scope','$location','$stateParams','$sce', function ($scope,$location,$stateParams,$sce) {
    	var type=$stateParams.type;
       	var all=[
			{'id':1, 'brand':'Ford','model':'Mustang','variant':'LTS-102','year':'2010',
				'likes':'4','bought_price':'400000','city':'Indore',
				'option':{'Offline':true,'Auction':true,'Sell_Now':true,'D2D':true},
				'image':'build/sample/Ford-mustang.jpg'},
			{'id':1, 'brand':'Ford','model':'Mustang','variant':'LTS-102','year':'2010',
				'likes':'4','bought_price':'400000','city':'Indore',
				'option':{'Offline':true,'Auction':true,'Sell_Now':true,'D2D':true},
				'image':'build/sample/Ford-mustang.jpg'},
			{'id':1, 'brand':'Ford','model':'Mustang','variant':'LTS-102','year':'2010',
				'likes':'4','bought_price':'400000','city':'Indore',
				'option':{'Offline':true,'Auction':true,'Sell_Now':true,'D2D':true},
				'image':'build/sample/Ford-mustang.jpg'},
			{'id':1, 'brand':'Ford','model':'Mustang','variant':'LTS-102','year':'2010',
				'likes':'4','bought_price':'400000','city':'Indore',
				'option':{'Offline':true,'Auction':true,'Sell_Now':true,'D2D':true},
				'image':'build/sample/Ford-mustang.jpg'},
			{'id':1, 'brand':'Ford','model':'Mustang','variant':'LTS-102','year':'2010',
				'likes':'4','bought_price':'400000','city':'Indore',
				'option':{'Offline':true,'Auction':true,'Sell_Now':true,'D2D':true},
				'image':'build/sample/Ford-mustang.jpg'},
    			];
    	var my=[
			{'id':1, 'brand':'Ford','model':'Mustang','variant':'LTS-102','year':'2010',
				'likes':'4','bought_price':'400000','city':'Indore',
				'option':{'Offline':true,'Auction':true,'Sell_Now':true,'D2D':true},
				'image':'build/sample/Ford-mustang.jpg'},
			{'id':1, 'brand':'Ford','model':'Mustang','variant':'LTS-102','year':'2010',
				'likes':'4','bought_price':'400000','city':'Indore',
				'option':{'Offline':true,'Auction':true,'Sell_Now':true,'D2D':true},
				'image':'build/sample/Ford-mustang.jpg'},
			{'id':1, 'brand':'Ford','model':'Mustang','variant':'LTS-102','year':'2010',
				'likes':'4','bought_price':'400000','city':'Indore',
				'option':{'Offline':true,'Auction':true,'Sell_Now':true,'D2D':true},
				'image':'build/sample/Ford-mustang.jpg'},
			];

    	if (type=='my') { 
    		$scope.my_equip=my;
    		$scope.eqbtns=$sce.trustAsHtml('<a class="btn btn-info" href="#!equipments/all">All Equipments</a>');
    		$scope.head="My Equipments";
    	}
    	else { 
    		$scope.my_equip=all;
    		$scope.eqbtns=$sce.trustAsHtml('<a class="btn btn-info" href="#!equipments/my">My Equipments</a>');
    		$scope.head="ALL Equipments";
    	}

    }]);