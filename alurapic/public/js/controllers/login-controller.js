angular.module('alurapic')
    .controller('LoginController', function($scope, $http, $location) {

        $scope.usuario = {};
        $scope.mensagem = '';

        $scope.autenticar = function() {            
            $http.post('/autenticar',
                {login: $scope.usuario.login, senha: $scope.usuario.senha})
                .then(function() {
                    $location.path('/');
                }, function(error) {
                    $scope.mensagem = 'Login ou senha inválidos.';
                    $scope.usuario = {};
                })
        };
    })