(function () {
    'use strict';

    angular
        .module('ejemploJHipsterOnlineApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
