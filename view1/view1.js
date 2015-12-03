angular.module("lazyapp")

.controller("View1Ctrl", function ($scope, $state, $log) {
    $log.log("View1Ctrl called with scope id " + $scope.$id);
    $scope.isState = $state.is;

    $scope.message = "Message from View1Ctrl with state";
});