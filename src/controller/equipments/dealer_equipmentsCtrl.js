angular.module('angularApp')
    .controller('equipmentsCtrl', [ '$scope','$location', function ($scope,$location) {
    	$scope.my_equip=[
			{'id':1, 'brand':'Ford','model':'Mustang','variant':'LTS-102','year':'2010',
				'likes':'4','bought_price':'400000','city':'Indore',
				'option':{'Offline':true,'Auction':true,'Sell_Now':true,'D2D':true},
				'image':'build/sample/Ford-mustang.jpg'},
			{'id':1, 'brand':'Ford','model':'Mustang','variant':'LTS-102','year':'2010',
				'likes':'4','bought_price':'400000','city':'Indore',
				'option':{'Offline':true,'Auction':false,'Sell_Now':true,'D2D':true},
				'image':'build/sample/Ford-mustang.jpg'},
			{'id':1, 'brand':'Ford','model':'Mustang','variant':'LTS-102','year':'2010',
				'likes':'4','bought_price':'400000','city':'Indore',
				'option':{'Offline':true,'Auction':false,'Sell_Now':false,'D2D':true},
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
    }]);