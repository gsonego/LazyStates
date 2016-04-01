angular.module("lazyapp")

.controller("UsuariosDetalhesHistoricoCtrl", function ($scope, $log) {
    
    $log.log("UsuariosDetalhesHistoricoCtrl called with scope id " + $scope.$id);
    
    $scope.message = "A UsuariosDetalhesHistoricoCtrl Message"; 
    
    $scope.historico = [
        { data: "20/08/2015", descricao: "Login" },
        { data: "22/08/2015", descricao: "Reset de Senha" },
        { data: "10/09/2015", descricao: "Troca de Login" },
        { data: "15/09/2015", descricao: "Login" },
        { data: "18/09/2015", descricao: "Erro de senha" },
        { data: "18/09/2015", descricao: "Bloqueio" },
    ];
    
});