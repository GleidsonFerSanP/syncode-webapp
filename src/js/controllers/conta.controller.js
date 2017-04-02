;
(function() {

    'use strict'

    angular.module('myApp')
        .controller('ContaCtrl', contaCtrl);

    function contaCtrl($scope, $log, ngDialog, Conta) {
        $log.info('init conta');

        (function() {
            Conta.get(function(response) {
                $log.debug(response);
            }, function(error) {
                $log.error(error);
            })
        })();

        $scope.clickToOpenSaque = function() {
            ngDialog.open({
                template: './../../views/dialogs/dialog-saque.html',
                className: 'ngdialog-theme-default',
                scope: $scope,
                appendClassName: 'ngdialog-custom'
            });
        };

        $scope.clickToOpenDeposito = function() {
            ngDialog.open({
                template: './../../views/dialogs/dialog-deposito.html',
                className: 'ngdialog-theme-default',
                scope: $scope,
                appendClassName: 'ngdialog-custom'
            });
        };

        $scope.clickToOpenTransferencia = function() {
            ngDialog.open({
                template: './../../views/dialogs/dialog-transferencia.html',
                className: 'ngdialog-theme-default',
                scope: $scope,
                appendClassName: 'ngdialog-custom'
            });
        };

    }

})();