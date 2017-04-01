;
(function() {

    angular.module("myApp")
        .factory("timestampInterceptor", timestamp);

    function timestamp() {
        return {
            request: function(config) {
                var url = config.url;
                if (url.indexOf('view') > -1) return config;
                if (url.indexOf('html') > -1) return config;
                if (url.indexOf('js') > -1) return config;
                var timestamp = new Date().getTime();

                if (url.indexOf("?") !== -1)
                    config.url = url + "&timestamp=" + timestamp;
                else
                    config.url = url + "?timestamp=" + timestamp;
                return config;
            }
        };
    }

})();