;
(function() {

    'use strict'

    angular.module('myApp')
        .factory('Transacao', transacao);

    function transacao($http, Api) {
        return {
            list: function(callbackSuccess, callbackError) {

                var url = Api.transacoes;
                var request = {
                    url: url,
                    method: 'GET',
                }

                $http(request).then(function success(response) {
                    callbackSuccess(response);
                }, function error(response) {
                    callbackError(response);
                });
            },
            saque: function(data, callbackSuccess, callbackError) {

                var url = Api.transacoes + '/saque';
                var request = {
                    url: url,
                    method: 'POST',
                    data: data
                }

                $http(request).then(function success(response) {
                    callbackSuccess(response);
                }, function error(response) {
                    callbackError(response);
                });
            },
            deposito: function(data, callbackSuccess, callbackError) {

                var url = Api.transacoes + '/deposito';
                var request = {
                    url: url,
                    method: 'POST',
                    data: data
                }

                $http(request).then(function success(response) {
                    callbackSuccess(response);
                }, function error(response) {
                    callbackError(response);
                });
            },
            transferencia: function(data, callbackSuccess, callbackError) {

                var url = Api.transacoes + '/transferencia';
                var request = {
                    url: url,
                    method: 'POST',
                    data: data
                }

                $http(request).then(function success(response) {
                    callbackSuccess(response);
                }, function error(response) {
                    callbackError(response);
                });
            }
        }
    }

})();