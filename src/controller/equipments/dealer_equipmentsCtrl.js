angular.module('angularApp')
    .controller('dealer_equipmentsCtrl', [ '$scope','$location', function ($scope,$location) {
    	$scope.my_equip=[
			{'id':1, 'brand':'Ford','model':'Mustang','variant':'LTS-102','year':'2010',
				'likes':'4','bought_price':'400000','city':'Indore','image':'build/sample/Ford-mustang.jpg'},
			{'id':2,'brand':'Hyundai','model':'Verna','variant':'LTS-102','year':'2017',
				'likes':'6','bought_price':'400000','city':'Indore','image':'build/sample/Ford-mustang.jpg'},
			{'id':3,'brand':'Ford','model':'Mustang','variant':'LTS-102','year':'2010',
				'likes':'2','bought_price':'400000','city':'Indore','image':'build/sample/Ford-mustang.jpg'},
			{'id':4,'brand':'Ford','model':'Mustang','variant':'LTS-102','year':'2010',
				'likes':'13','bought_price':'400000','city':'Indore','image':'build/sample/Ford-mustang.jpg'},
			{'id':5,'brand':'Ford','model':'Mustang','variant':'LTS-102','year':'2010',
				'likes':'14','bought_price':'400000','city':'Indore','image':'build/sample/Ford-mustang.jpg'},
			{'id':6,'brand':'Ford','model':'Mustang','variant':'LTS-102','year':'2010',
				'likes':'0','bought_price':'400000','city':'Indore','image':'build/sample/Ford-mustang.jpg'},
    					];

    }]);

//angular.module('equiment.angularApp',['ui.router'])