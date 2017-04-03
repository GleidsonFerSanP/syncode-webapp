;
(function() {

    'use strict'

    angular.module('myApp')
        .controller('ContaCtrl', contaCtrl);

    function contaCtrl($scope, $rootScope, $log, ngDialog, Conta, Transacao) {
        $log.info('init conta');

        function conta() {
            Conta.get(function(response) {
                $log.debug(response);
                $rootScope.conta = response.data;
            }, function(error) {
                $log.error(error);
            })
        }

        function msgSuccess(text) {
            $scope.message.success = text;
            $scope.message.error = null;
        }

        function msgError(text) {
            $scope.message.success = null;
            $scope.message.error = text;
        }

        conta();

        $scope.listarTransacoes = function() {
            Transacao.list(function(response) {
                $scope.transacoes = response.data;
            }, function(error) {
                $log.error(error);
            })
        }

        $scope.limite = 200.00;
        $scope.message = {
            success: null,
            error: null
        }
        $scope.transacao = {
            tipo: null,
            valor: null
        }

        function resetMsg() {
            $scope.message = {
                success: null,
                error: null
            }
        }

        function resetTransacao() {
            $scope.message = {
                success: null,
                error: null
            }
        }

        $scope.deposito = function(formSaque) {

            if (formSaque.$invalid) {
                msgError('Verifique o preenchimento do valor');
                return;
            }

            Transacao.deposito($scope.transacao, function(response) {
                $scope.listarTransacoes();
                conta();
                msgSuccess('Depósito realizado com sucesso');
                $scope.transacao.valor = null;
            }, function(error) {
                $log.error(error);
                msgError('Houve um erro ao tentar realizar o depósito, por favor tente novamente');
            });
        }

        $scope.transferencia = function(formSaque) {

            console.log($scope.transacao);

            if (formSaque.$invalid) {
                $scope.message.error = 'Verifique o preenchimento do formulário';
                return;
            }

            Transacao.transferencia($scope.transacao, function(response) {
                $scope.listarTransacoes();
                conta();
                msgSuccess('Transferência realizada com sucesso');
                $scope.transacao.valor = null;
            }, function(error) {
                $log.error(error);
                msgError(error.data.message);
            });
        }
        $scope.saque = function(formSaque) {

            console.log(formSaque);

            if (formSaque.$invalid) {
                $scope.message.error = 'Verifique o preenchimento do valor';
                return;
            }

            Transacao.saque($scope.transacao, function(response) {
                $scope.listarTransacoes();
                conta();
                msgSuccess('Saque realizado com sucesso');
                $scope.transacao.valor = null;
            }, function(error) {
                $log.error(error);
                msgError(error.data.message);
            });
        }

        $scope.clickToOpenSaque = function() {
            resetMsg();
            resetTransacao();
            ngDialog.open({
                template: './../../views/dialogs/dialog-saque.html',
                className: 'ngdialog-theme-default',
                scope: $scope,
                appendClassName: 'ngdialog-custom'
            });
        };

        $scope.clickToOpenDeposito = function() {
            resetMsg();
            resetTransacao();
            ngDialog.open({
                template: './../../views/dialogs/dialog-deposito.html',
                className: 'ngdialog-theme-default',
                scope: $scope,
                appendClassName: 'ngdialog-custom'
            });
        };

        $scope.clickToOpenTransferencia = function() {
            resetMsg();
            resetTransacao();
            ngDialog.open({
                template: './../../views/dialogs/dialog-transferencia.html',
                className: 'ngdialog-theme-default',
                scope: $scope,
                appendClassName: 'ngdialog-custom'
            });
        };

    }

})();