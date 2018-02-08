angular.module('angularApp')
.controller('auctionCtrl', ['$scope','$http','config','$location', function ($scope,$http,config,$location) {
	$scope.auctionseq=[
	{'id':1,'eq':'Honda City','base_bid':400000,'current_bid':401000,'your_bid':'0' },
	{'id':2,'eq':'Back Hoe' ,'base_bid':400000,'current_bid':0,'your_bid':'0' },
	{'id':3,'eq':'Breeza','base_bid':400000,'current_bid':403000,'your_bid':'0' },
	{'id':4,'eq':'Baleno','base_bid':400000,'current_bid':404000,'your_bid':'0' },
	{'id':5,'eq':'Honda City','base_bid':400000,'current_bid':405000,'your_bid':'0' }
	];
	$scope.confirm=false;
	$scope.carprofile=function(id){
		$location.path('/carprofile/'+id);
	};
	$scope.bidnow=function(id){
 		$scope.bid=$scope.auctionseq[id];
 		$scope.bidprice=$scope.bid.current_bid;
 		if ($scope.bid.current_bid>$scope.bid.base_bid) {
 			$scope.limit=$scope.bid.current_bid;
 		}
 		else
 			$scope.limit=$scope.bid.base_bid;
 	};
 	$scope.confirmbid=function(){
 		if($scope.bidprice>$scope.limit)
 			{	
 				$scope.$watch(function(){$scope.confirm=true;});
 			}
 		else alert("Please check your bid !");
 	};
 	$scope.changebid=function(){
 		$scope.$watch(function(){$scope.confirm=false;});
 	};
 	$('#myModal').on('hidden.bs.modal', function () {
    	$scope.$watch(function(){$scope.confirm=false;});
	})
}]);   