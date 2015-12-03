angular.module("lazyapp")

.controller("View1ProfileCtrl", function ($scope, $log) {
    $log.log("ProfileCtrl called with scope id " + $scope.$id);
    $scope.message = "A View1ProfileCtrl Message"; 
});