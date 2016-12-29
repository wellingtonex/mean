angular.module('alurapic')
    .factory('tokenInterceptor', function($window) {

        let interceptor = {};

        interceptor.response = function(response) {
            console.log('Recebi resposta');
            let token = response.headers('x-access-token');
            if(token) {
                $window.sessionStorage.token = token;
                console.log('Token armazenado no navegador.');                
            }
            return response;
        };

        interceptor.request = function(config) {
            config.headers = config.headers || {};
            if($window.sessionStorage.token) {
                config.headers['x-access-token'] = $window.sessionStorage.token;
                console.log('Adicionando token no headers da requisicão...') ;
            }
            return config;
        };

        return interceptor;
    });