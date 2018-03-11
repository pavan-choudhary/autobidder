var app=angular.module('adminApp', ['ui.router','oc.lazyLoad']);
app.constant('config', {
    apibase:'http://35.200.128.175:3000'
})
app.run(['$rootScope','$state','$location', 'Auth','back',
     function ($rootScope,$state, $location, Auth,back) {
        $rootScope.$on('$locationChangeStart', function (event) {
        if (!Auth.isLoggedIn()) {
            console.log('DENY');
            //event.preventDefault();
            $state.go('login');
        }
        else {
            console.log('ALLOW');
            if ($location.path()=='/login' || $location.path()=='') { 
                $state.go('Panel');
                }
            }
        });
        $rootScope.$on('$locationChangeSuccess', function (event ,to ,from) {
           back.setBack(from);
        });
    }
]);

app.factory('Auth', function(){
    var user;
    var path;
    return{
        setUser : function(aUser){
            localStorage.setItem("admin",aUser);

        },
        isLoggedIn : function(){
            user=localStorage.getItem("admin");
            return(user)? user : false;
        },
        getUser :function(){
            return user;
        },
        setId : function(id){
            localStorage.setItem("aid",id);
        },
        getId : function(){
            return localStorage.getItem('aid');
        }   
      }
    });
app.factory('back', function(){
    var prev;
    return{
        setBack : function(pre){
            prev=pre; 
        },
        getBack : function(){  
            return prev;    
        }   
      }
    });

app.controller('panelCtrl', function($rootScope,$scope,back) {
    $scope.back=function () {
        window.location.href=back.getBack();
        console.log(back.getBack());
    }
    $scope.dealers=[
        { id:1,name:'Equipshare Equipshare',city:'Indore',State:'MP',mobile:9039964998,email:"info@equpshare.in" },
        { id:2,name:'Equipshare',city:'Indore',State:'MP',mobile:9039964998,email:"info@equpshare.in" },
        { id:3,name:'Equipshare',city:'Indore',State:'MP',mobile:9039964998,email:"info@equpshare.in" }
        ];
   $scope.approve=function(id)
   {  
    alert('approved :'+id);
    $scope.dealers=[
        { id:1,name:'change1',city:'Indore',State:'MP',mobile:9039964998,email:"info@equpshare.in" },
        { id:2,name:'change2342',city:'Indore',State:'MP',mobile:9039964998,email:"info@equpshare.in" }
        ];
   }
});

//login logout
app.controller('loginCtrl', ['config','$location','$scope','$http', 'Auth','$state' ,function (config,$location,$scope,$http, Auth,$state) {

      $scope.login = function () {
        // Ask to the server, do your job and THEN set the user
        $http({
        url: config.apibase+'/login',
        method: "POST",
        data:{'mobile':$scope.mobile,'password':$scope.password },
        })
        .then(function (resp) { 
            console.log(resp);
            if (resp.data.msg=="Hello, Welcome") 
                { 
                    Auth.setId(resp.data.id);
                    Auth.setUser(resp.data.name);
                    console.log('Success');
                    $state.go('Panel');
                }
            else {
                alert("Invalid Login");
             } 
        });
    }
}]);


app.controller('logoutCtrl', [ '$scope','$http','config' , function ($scope,$http,config) {
       $http.get(config.apibase+"/logout")
        .then(function (resp) {
            console.log(resp);
            localStorage.removeItem("admin");
            localStorage.removeItem("aid");
        });
}]);