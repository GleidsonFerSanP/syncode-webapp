;
(function() {
    'use strict';

    angular.module('myApp')
        .directive('transacoes', transacoes);

    function transacoes(Transacao, $log) {
        return {
            replace: false,
            restrict: 'A',
            template: [
                '<p ng-class="{\'zebra\':$index % 1 === 0}" ng-repeat="t in transacoes">',
                '<span style="font-size: 14px;" ng-bind="t.descricao"></span>',
                '<span ng-if="t.tipo === \'TRANSFERENCIA\' && t.contaOrigem.numero !== conta.numero" style="font-size: 10px; margin-left: 50px;font-weight: bold;" ng-bind="\'Ag. Origem: \'+(t.contaOrigem.agencia.numero)+\' CC:\'+(t.contaOrigem.numero)"></span>',
                '<span ng-if="t.tipo !== \'SAQUE\' && t.tipo !== \'TARIFACAO\' && (t.tipo === \'TRANSFERENCIA\' && t.contaOrigem.numero !== conta.numero) || t.tipo === \'DEPOSITO\'" style="float: right; font-size: 14px;margin-top: 9px; color: blue;" ng-bind="t.valor | currency"></span>',
                '<span ng-if="t.tipo === \'SAQUE\' || t.tipo === \'TARIFACAO\' || (t.tipo === \'TRANSFERENCIA\' && t.contaOrigem.numero === conta.numero)" style="float: right; font-size: 14px;margin-top: 9px; color: red;" ng-bind="\'-\'+(t.valor | currency)"></span>',
                '<p>',
            ].join(""),
            link: function(scope, element, attrs) {}

        }
    }

})();