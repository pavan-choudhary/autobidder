/**
 * Created by semianchuk on 08.10.16.
 */
angular.module('angularApp')
    .service('mainService', [ function () {
        var thisIsPrivate = "mainService";
        this.getPrivate = function() {
            return thisIsPrivate;
        };
        var script_path = "build/scripts/";
        this.getPath = function() {
            return script_path;
        };
        var css_path = "build/scripts/";
        this.getcssPath = function() {
            return css_path;
        };
    }]);