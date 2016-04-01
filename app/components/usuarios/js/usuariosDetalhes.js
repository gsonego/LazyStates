angular.module("lazyapp")

.controller("UsuariosDetalhesCtrl", function ($scope, $state, $log) {

    $log.log("UsuariosDetalhesCtrl called with scope id " + $scope.$id);

    $scope.isState = $state.is;

    $scope.message = "Message from UsuariosDetalhesCtrl with state";
    
    $scope.usuario = { 
        id: 1, 
        nome: "Fulano", 
        departamento: "SAC" 
    };    
});