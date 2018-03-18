angular.module('angularApp')
    .controller('dashboardCtrl', [ '$scope',  function ($scope) {
        $scope.show();
        $scope.info = {
            visits  : '1002',
            inventory : {"vehicle":"Cars","Total":5},
            purchase:4
        }
    }])

.controller('chartCtrl', [ 'config','$scope','$http',  function (config,$scope,$http) {
    Chart.defaults.global.colors=['#ff3a3a', '#4D5360', '#00ADF9', '#DCDCDC', '#46BFBD','#803690', '#949FB1'];
    Chart.defaults.global.defaultFontColor = '#000';
    $scope.owner_lab = ["BMW", "Baleno", "Celerio","Desire"];
  	$scope.owner_data = [3, 5, 1,2];
  	$scope.owner_options= {
        title: {
            display: true,
            text: 'Your cars',
            position:'bottom'
        },
        legend: {
            display: true,
            position:'bottom'
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 15,
                bottom: 0
            }
        }
    };
//data for analytics
	//$scope.views_lab = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  	$scope.views_series = ['Views', 'Likes'];
 	$scope.views_data = [ [4,3,4,6] , [10,5,8,2] ];
  	$scope.views_options= {
        title: {
            display: true,
            text: 'Views & Likes',
            position:'bottom'
        },
        legend: {
            display: true,
            position:'bottom'
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 30,
                bottom: 0
            }
        }
    };

}]);