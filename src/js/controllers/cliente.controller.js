;
(function() {

    'use strict'

    angular.module('myApp')
        .controller('ClienteCtrl', clienteCtrl);

    function clienteCtrl($scope, $log, ngDialog, Cliente) {
        $log.info('init cliente');

        (function() {
            Cliente.get(function(response) {
                $log.debug(response);
                $scope.cliente = response.data;
            }, function(error) {
                $log.error(error);
            })
        })();

        $scope.message = {
            success: null,
            error: null
        }

        $scope.submit = function(cliente) {

            if ($scope.clienteForm.$invalid) {
                $scope.message.error = "Por favor verifique os campos obrigatórios no preenchimento do formulário"
                return;
            }

            Cliente.save(cliente, function(response) {
                $scope.message.success = 'Cliente salvo com sucesso';
                $scope.message.error = null;
                $scope.cliente = response.data;
            }, function(error) {
                $scope.message.success = null;
                $scope.message.error = error.data.message;
            });
        }

        $scope.clickToOpenCliente = function() {
            ngDialog.open({
                template: './../../views/dialogs/dialog-cliente.html',
                className: 'ngdialog-theme-default',
                scope: $scope,
                appendClassName: 'ngdialog-custom'
            });
        };

    }

})();