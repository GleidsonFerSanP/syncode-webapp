;
(function() {

    'use strict'

    angular.module('myApp')
        .controller('LoginCtrl', loginCtrl);

    function loginCtrl($scope, $log, $localStorage, $location, Login) {
        $log.info('init login');
        $scope.tabLogin = 'cliente';
        $scope.z = "Agência";
        $scope.message = {
            error: '',
            success: ''
        }

        $scope.loginData = {
            login: "",
            password: ""
        }

        $scope.loginCliente = function(obj) {
            $log.info(obj);
            $localStorage.token = null;
            Login.loginCliente(obj, function(response) {

                $localStorage.token = response.data.value;

                var token = $localStorage.GCMTOKEN;

                $location.path('/app/home');

            }, function(response) {
                $log.error(response);
                $scope.message.error = response.data.message;
            });

        }

        $scope.changeTab = function(user) {
            $scope.tabLogin = user;
        }

    }

})();