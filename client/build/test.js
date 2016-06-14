"use strict";
var Test;
(function (Test) {
    var Something = (function () {
        function Something($router) {
            this.$router = $router;
            $router.config([
                { path: '/', component: 'home' }
            ]);
        }
        return Something;
    }());
    Test.Something = Something;
})(Test = exports.Test || (exports.Test = {}));
