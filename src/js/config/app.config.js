;
(function() {
    var BASEURL = "http://localhost:8080/api/v1";
    var api = {
        loginGerente: BASEURL + '/login/gerente'
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
            .otherwise({
                templateUrl: '../../views/login.html',
                controller: "LoginCtrl"
            });
    }

})();