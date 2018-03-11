angular.module('adminApp')
.controller('addbrandCtrl', ['$scope','$http', function ($scope,$http) {
$scope.allbrand=['BMW','Suzuki'];
    $scope.addetail=function () {
        console.log($scope.eq);
        $scope.success=true;
        $scope.brand=$scope.eq.brand;
        $scope.model=$scope.eq.model;
        $scope.allbrand.push($scope.brand);
    };
    
 }]);