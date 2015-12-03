angular.module("lazyapp")
    
.controller("View2Ctrl", function ($scope, $log) {
    $log.log("View2Ctrl called with scope id " + $scope.$id);
    $scope.message = "A View2Controller Message"; 
});