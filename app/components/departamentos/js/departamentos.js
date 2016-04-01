angular.module("lazyapp")
    
.controller("DepartamentosCtrl", function ($scope, $log) {
    $log.log("DepartamentosCtrl called with scope id " + $scope.$id);
    $scope.message = "A DepartamentosCtrl Message"; 
});