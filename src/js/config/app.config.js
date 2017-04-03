;
(function() {
    'use strict'
    var BASEURL = "http://localhost:8080/api/v1";
    var api = {
        loginCliente: BASEURL + '/login/cliente',
        contas: BASEURL + '/contas',
        clientes: BASEURL + '/clientes',
        transacoes: BASEURL + '/transacoes'
    };

    angular.module('myApp')
        .config(routeConfig)
        .constant('Api', api);

    function routeConfig($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: '../../views/login.html',
                controller: "LoginCtrl"
            })
            .when("/app/home", {
                templateUrl: '../../views/home-conta.html',
                controller: "HomeCtrl"
            })
            .otherwise({
                templateUrl: '../../views/login.html',
                controller: "LoginCtrl"
            });
    }

})();