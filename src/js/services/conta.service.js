;
(function() {

    'use strict'

    angular.module('myApp')
        .factory('Conta', conta)

    function conta($http, Api) {

        return {

            get: function(callbackSuccess, callbackError) {
                var url = Api.contas;
                var request = {
                    url: url,
                    method: 'GET'
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