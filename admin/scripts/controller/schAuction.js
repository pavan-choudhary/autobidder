angular.module('adminApp')
.controller('schAuctionCtrl', ['$scope','$http', function ($scope,$http) {
        
        $scope.appr=false;
        $scope.showPending=function () {
        	$(".common").hide();
	    	$("#1").fadeIn();
        	$scope.appr=false;
        	$scope.auctionseq=[
		        {'id':1,'brand':'Ford','model':'Mustang','variant':'LTS-102','year':'2010',
						'likes':'4','bought_price':'400000','expectations':'450000' , 'dealer':'Dealer name',
						'dealer_id':13, 'city':'Indore'},
				{'id':1,'brand':'Ford','model':'Mustang','variant':'LTS-102','year':'2010',
						'likes':'4','bought_price':'400000','expectations':'450000' , 'dealer':'Dealer name',
						'dealer_id':13, 'city':'Indore'},
				{'id':1,'brand':'Ford','model':'Mustang','variant':'LTS-102','year':'2010',
						'likes':'4','bought_price':'400000','expectations':'450000' , 'dealer':'Dealer name',
						'dealer_id':13, 'city':'Indore'},
		        ];
        };
        $scope.showPending();
        $scope.showApproved=function () {
        	$(".common").hide();
	    	$("#1").fadeIn();
       		$scope.appr=true;
        	$scope.auctionseq=[
	        {'id':1,'brand':'Ford','model':'Mustang','variant':'LTS-102','year':'2010',
					'likes':'4','bought_price':'400000','expectations':'450000' , 'dealer':'Dealer name',
					'dealer_id':13, 'city':'Indore'},
			{'id':2,'brand':'Ford','model':'Mustang','variant':'LTS-102','year':'2010',
					'likes':'4','bought_price':'400000','expectations':'450000' , 'dealer':'Dealer name',
					'dealer_id':13, 'city':'Indore'},
			{'id':3,'brand':'Ford','model':'Mustang','variant':'LTS-102','year':'2010',
					'likes':'4','bought_price':'400000','expectations':'450000' , 'dealer':'Dealer name',
					'dealer_id':13, 'city':'Indore'},
			{'id':4,'brand':'Ford','model':'Mustang','variant':'LTS-102','year':'2010',
					'likes':'4','bought_price':'400000','expectations':'450000' , 'dealer':'Dealer name',
					'dealer_id':13, 'city':'Indore'},
			{'id':5,'brand':'Ford','model':'Mustang','variant':'LTS-102','year':'2010',
					'likes':'4','bought_price':'400000','expectations':'4500000' , 'dealer':'Dealer name',
					'dealer_id':13, 'city':'Indore'},
	        ];
	    };
	    //approve eq
		$scope.accept=function () {
			console.log('accepted');	
		};	    

	    //schedule date
	    $scope.schDate=function () {
	    	$(".common").hide();
	    	$("#2").fadeIn();
	    };

	    $scope.selected={};
	   var eqid=[];
	   $scope.cb={};

	   //adding checkbox ids
	   $scope.addtoList=function (id,status) {
	   		if(status==true)
	   			eqid.push(id);
	   		else
	   			if (status==false) 
	   				{ var i=eqid.indexOf(id); eqid.splice(i,1);	}
	   		console.log(eqid);
	   };

	   //assign slots
	   $scope.assignSlot=function()
	   {	if (eqid.length==0) {
	   			alert("select some Equipment first!");
	   			$scope.addtoList();
	   		}
	   		else
		   		{
		   			$(".common").hide();
			    	$("#3").fadeIn();
			    	$scope.selected.ids=eqid;
			    	console.log('in');
			    }
	    };

	    //final checkout
	    $scope.checkoutAuction=function(){
	    	console.log(angular.toJson($scope.selected)); 
	    };

	    $scope.scheduled=false;
	    $scope.scheduledAuc=function(){
	    	$(".common").hide();
	    	$("#4").fadeIn();
       		$scope.scheduled=true;
        	$scope.schauc=[
        	{'date':'24/2/2018',
	        'equipments':[{'id':1,'brand':'Ford','model':'Mustang','variant':'LTS-102','year':'2010',
					'likes':'4','bought_price':'400000','expectations':'450000' , 'dealer':'Dealer name',
					'dealer_id':13, 'city':'Indore'},
					{'id':1,'brand':'Ford','model':'Mustang','variant':'LTS-102','year':'2010',
					'likes':'4','bought_price':'400000','expectations':'450000' , 'dealer':'Dealer name',
					'dealer_id':13, 'city':'Indore'},
					]
				},
			{'date':'26/2/2018',
	        'equipments':[{'id':1,'brand':'Ford','model':'Mustang','variant':'LTS-102','year':'2010',
					'likes':'4','bought_price':'400000','expectations':'450000' , 'dealer':'Dealer name',
					'dealer_id':13, 'city':'Indore'}
					]
				},
	        	];	
	    };

	    //to show bids
	    $scope.showbid=false;
	    $scope.showBids=function(){
	    	$(".common").hide();
	    	$("#4").fadeIn();
	    	$scope.showbid=true;
	    	$scope.schauc=[
	    		{'date':'26/2/2018',
	        	'equipments':[{'id':1,'brand':'Ford','model':'Mustang','variant':'LTS-102','year':'2010',
					'likes':'4','bought_price':'400000','expectations':'450000' , 'dealer':'Dealer name',
					'dealer_id':13, 'city':'Indore'}],
				'time':'3:00 PM - 4:00 PM',
				'bids':[{ 'dealer_id':12,'dealer_name':'alpha','bid':50000 },
						{ 'dealer_id':12,'dealer_name':'Beta','bid':501000 },
						{ 'dealer_id':12,'dealer_name':'Gama','bid':502000 }],
				'max_bid':503000
				},
				{'date':'26/2/2018',
	        	'equipments':[{'id':1,'brand':'Ford','model':'Mustang','variant':'LTS-102','year':'2010',
					'likes':'4','bought_price':'400000','expectations':'450000' , 'dealer':'Dealer name',
					'dealer_id':13, 'city':'Indore'}],
				'time':'3:00 PM - 4:00 PM',
				'bids':[{ 'dealer_id':12,'dealer_name':'alpha','bid':50000 },
						{ 'dealer_id':12,'dealer_name':'Beta','bid':501000 },
						{ 'dealer_id':12,'dealer_name':'Gama','bid':502000 }],
				'max_bid':503000
				},
	    	];
	    };

	    $scope.aler=function(){
	    	alert("ads"); 
	    };

}]);