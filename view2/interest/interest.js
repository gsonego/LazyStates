angular.module("lazyapp")
    
.controller("View2InterestCtrl", function ($scope, $log) {
    $log.log("View2InterestCtrl called with scope id " + $scope.$id);
    $scope.message = "A View2InterestCtrl Message"; 
});