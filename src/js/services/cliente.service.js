;
(function() {

    'use strict'

    angular.module('myApp')
        .factory('Cliente', cliente);

    function cliente($http, Api) {

        return {

            get: function(callbackSuccess, callbackError) {
                var url = Api.clientes;
                var request = {
                    url: url,
                    method: 'GET'
                }

                $http(request).then(function(response) {
                    callbackSuccess(response);
                }, function(error) {
                    callbackError(error);
                })

            },
            save: function(data, callbackSuccess, callbackError) {

                var url = Api.clientes;
                var request = {
                    url: url,
                    method: 'POST',
                    data: data
                }

                $http(request).then(function(response) {
                    callbackSuccess(response);
                }, function(error) {
                    callbackError(error);
                })


            }

        }

    }

})();