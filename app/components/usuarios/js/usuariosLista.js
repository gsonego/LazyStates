angular.module("lazyapp")

.controller("UsuariosListaCtrl", function ($scope, $state, $log) {
    $log.log("UsuariosListaCtrl called with scope id " + $scope.$id);
    $scope.isState = $state.is;

    $scope.message = "Message from UsuariosListaCtrl with state";
    
    $scope.usuarios = [
        { id: 1, nome: "Fulano", departamento: "SAC" },
        { id: 2, nome: "Ciclano", departamento: "Análise" },
        { id: 3, nome: "Beltrano", departamento: "Diretoria" }
    ];
    
});