angular.module("lazyapp")

.controller("UsuariosCtrl", function ($scope, $state, $log) {
    $log.log("UsuariosCtrl called with scope id " + $scope.$id);
    $scope.isState = $state.is;

    $scope.message = "Message from UsuariosCtrl with state";
});