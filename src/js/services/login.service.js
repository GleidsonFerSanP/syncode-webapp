;
(function() {

    'use strict'

    angular.module('myApp')
        .factory('Login', login);

    function login($http, Api) {
        return {
            loginCliente: function(data, callbackSuccess, callbackError) {

                var url = Api.loginCliente;
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