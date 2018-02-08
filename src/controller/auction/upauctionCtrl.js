	angular.module('angularApp')
.controller('upauctionCtrl', ['$scope','$http','config','$location', function ($scope,$http,config,$location) {
	$scope.upeq=[
	{'id':1,'eq':'Honda City','base_bid':400000, "date":"6/03/18 3:00PM" },
	{'id':2,'eq':'Back Hoe' ,'base_bid':400000, "date":"6/03/18 3:00PM" },
	{'id':3,'eq':'Breeza','base_bid':400000, "date":"6/03/18 3:00PM"},
	{'id':4,'eq':'Baleno','base_bid':400000, "date":"6/03/18 3:00PM"},
	{'id':5,'eq':'Honda City','base_bid':400000, "date":"6/03/18" }
	];
}]);  