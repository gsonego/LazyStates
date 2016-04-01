angular.module("lazyapp")
    
.controller("DepartamentosListaCtrl", function ($scope, $log) {
    $log.log("DepartamentosListaCtrl called with scope id " + $scope.$id);
    
    $scope.message = "A DepartamentosListaCtrl Message"; 
    
    $scope.departamentos = [
        { id: 1, nome: "SAC" },
        { id: 2, nome: "Análise" },
        { id: 3, nome: "Diretoria" }
    ];
    
});