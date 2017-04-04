;
(function() {

    'use strict'

    angular.module('myApp')
        .controller('LoginCtrl', loginCtrl);

    function loginCtrl($scope, $log, $localStorage, $location, Login, ngDialog) {
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

        $scope.instrucoes = function() {
            ngDialog.open({
                template: './../../views/dialogs/dialog-instrucoes.html',
                className: 'ngdialog-theme-default',
                scope: $scope,
                appendClassName: 'ngdialog-custom'
            });
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