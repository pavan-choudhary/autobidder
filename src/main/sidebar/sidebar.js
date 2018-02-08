angular.module('angularApp')
.directive('sidebar', function() {
  return {
    restrict: 'E',
    scope:false,
    templateUrl: 'public/templates/sidebar.html',
    link: function(scope) {
      scope.menu =[{"name":"Home","icon":"home","href":"Home"}
      ,{"name":"Dashboard","icon":"dashboard","href":"Dashboard"}
      ,{"name":"My Equipments","icon":"upload","href":"Dealer_Equipments"}
      ,{"name":"Dealer Management","icon":"cogs","href":"DRM"}
      ,{"name":"Profile","icon":"user","href":"profile"}
      ,{"name":"Auctions","icon":"gavel","href":"auction"}
      ,{"name":"Allocations","icon":"get-pocket","href":"allocation"}
      ,{"name":"Logout","icon":"sign-out","href":"logout"}];
    }
  };
})
.directive('topbar', function(Auth) {
  return {
    restrict: 'E',
    scope: false,
    templateUrl: 'public/templates/topbar.html',
    link: function(scope,) {     
        scope.$watch(function() {
            scope.username=Auth.getUser();
        });
    }
  };
})
