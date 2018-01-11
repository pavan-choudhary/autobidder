
angular.module('angularApp')

    .controller('dashboardCtrl', [ '$scope',  function ($scope) {
        $scope.info = {
            visits  : '1002',
            inventory : {"vehicle":"Cars","Total":5},
            purchase:4
        }
    }]);