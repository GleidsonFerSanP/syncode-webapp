;
(function() {

    angular.module('myApp')
        .factory('Login', login);

    function login($http, Api) {
        return {
            loginGerente: function(data, callbackSuccess, callbackError) {

                var url = Api.loginGerente;
                var request = {
                    url: url,
                    method: 'POST',
                    data: data
                }

                $http(request)
                    .then(function(response) {
                            callbackSuccess(response);
                        },
                        function(err) {
                            callbackError(err);
                        }
                    );


            }
        }
    }

})();