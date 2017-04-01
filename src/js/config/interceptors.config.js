;
(function() {

    angular.module('myApp')
        .config(['$httpProvider', function($httpProvider) {
            $httpProvider.interceptors.push(['$q', '$location', '$localStorage', '$log',
                function($q, $location, $localStorage, $log) {

                    return {
                        'request': function(config) {
                            config.headers = config.headers || {};
                            if ($localStorage.token) {
                                config.headers.Authorization = $localStorage.token;
                            }
                            return config;
                        },
                        'responseError': function(response) {

                            console.log(response);

                            if (response.status === 401 || response.status === 403) {
                                $location.path('/login');
                            }

                            if (response.status === 502 || response.status === 504 || response.status === -1 || response.status === 503 || response.status === 500) {

                                var msg = "O servidor parece estar fora do ar, por favor aguarde alguns minutos e tente novamente";

                                $log.debug(msg);

                                alert(msg);

                            }

                            return $q.reject(response);
                        }
                    };
                }
            ]);

        }])
        .config(function($httpProvider) {
            $httpProvider.interceptors.push("timestampInterceptor");
        });

})();