angular.module('adminApp')
.controller('addbrandCtrl', ['$scope','$http', function ($scope,$http) {
    $scope.addetail=function () {
    	var mod=[];
        $scope.success=true;
        	$("input[name^='model']").each(
        		function(){
        			var m=$(this).val();
		        	mod.push(m);
        		}
        	);
        $scope.brand=$scope.eq.brand;
        $scope.model=mod;
        console.log(mod);
    };
    
 }]);