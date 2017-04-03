;
(function() {

    'use strict'

    angular.module('myApp')
        .controller('HomeCtrl', homeCtrl);

    function homeCtrl($scope, $log, $localStorage, $location) {
        $log.info('init home');

        $scope.logout = function() {
            $localStorage.token = null;
            $location.path('/login');
        }

    }

})();