;
(function() {

    angular.module('myApp')
        .controller('LoginCtrl', loginCtrl);

    function loginCtrl($scope, $log, $localStorage, Login) {
        $log.info('init login');
        $scope.tabLogin = 'cliente';

        $scope.loginData = {
            login: "",
            password: ""
        }

        $scope.loginGerente = function(obj) {
            $log.info(obj);

            Login.loginGerente(obj, function(response) {

                $localStorage.token = response.data.value;

                var token = $localStorage.GCMTOKEN;

                $location.path('/app/home');

            }, function(response) {
                $log.error(response);
            });

        }

        $scope.changeTab = function(user) {
            $scope.tabLogin = user;
        }

    }

})();