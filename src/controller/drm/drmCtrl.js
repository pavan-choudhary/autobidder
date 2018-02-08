angular.module('angularApp')
.controller('drmCtrl', ['$scope', function ($scope) {
    $scope.leads=[
        {id:1, name:'Pavan Choudhary',ltype:'Buy',eqname:'Backhoe Loader',contact:'9090909090',next:'3 days after'},
        {id:2, name:'Jhon Smith',ltype:'Sell',eqname:'Concrete Mixer',contact:'990099887',next:'2/2/2018'},
        {id:1, name:'Lorem Ipsum',ltype:'Buy',eqname:'Backhoe Loader',contact:'9090909090',next:'3 days after'},
        {id:1, name:'cust1',ltype:'Buy',eqname:'Backhoe Loader',contact:'9090909090',next:'3 days after'},
        {id:1, name:'cust1',ltype:'Buy',eqname:'Backhoe Loader',contact:'9090909090',next:'3 days after'}

    ];
 }]);   