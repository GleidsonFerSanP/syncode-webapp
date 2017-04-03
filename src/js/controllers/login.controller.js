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

        $scope.$on('logar', function(event, args) {
            $scope.message.error = "Por favor realize o login";
        });

        $scope.loginCliente = function(obj) {
            $log.info(obj);
            $localStorage.token = null;
            Login.loginCliente(obj, function(response) {

                $localStorage.token = response.data.value;
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